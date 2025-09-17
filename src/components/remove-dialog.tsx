"use client";

import { toast } from "sonner";
import { useState } from "react";
import { useMutation } from "convex/react";
import { Id } from "../../convex/_generated/dataModel";
import { api } from "../../convex/_generated/api";

interface RemoveDialogProps {
    documentId: Id<"documents">;
    children: React.ReactNode;
}

export const RemoveDialog = ({ documentId, children }: RemoveDialogProps) => {
    const remove = useMutation(api.documents.removeById);
    const [isRemoving, setIsRemoving] = useState(false);

    const handleRemove = async (e: React.MouseEvent) => {
        e.stopPropagation();

        if (isRemoving) {
            return;
        }


        const confirmed = window.confirm("Are you sure you want to delete this document? This action cannot be undone.");

        if (!confirmed) return;

        setIsRemoving(true);

        try {
            await remove({ id: documentId });
            toast.success("Document removed");
        } catch (error) {
            console.error("❌ Remove failed:", error); // DEBUG
            toast.error("Something went wrong");
        } finally {
            setIsRemoving(false);
        }
    };

    console.log("🔧 RemoveDialog render - documentId:", documentId, "isRemoving:", isRemoving); // DEBUG

    return (
        <div
            onClick={handleRemove}
            style={{
                opacity: isRemoving ? 0.5 : 1,
                cursor: 'pointer',
                border: '1px solid red' // Временная граница для визуальной отладки
            }}
        >
            {children}
        </div>
    );
};