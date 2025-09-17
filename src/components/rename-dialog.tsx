"use client";

import { useState } from "react";
import { useMutation } from "convex/react";
import { Id } from "../../convex/_generated/dataModel";
import { api } from "../../convex/_generated/api";
import { toast } from "sonner";

interface RenameDialogProps {
    documentId: Id<"documents">;
    initialTitle: string;
    children: React.ReactNode;
}

export const RenameDialog = ({ documentId, initialTitle, children }: RenameDialogProps) => {
    const update = useMutation(api.documents.updateById);
    const [isUpdating, setIsUpdating] = useState(false);

    const handleRename = async (e: React.MouseEvent) => {
        e.stopPropagation();

        if (isUpdating) return;

        const newTitle = window.prompt("Enter new document name:", initialTitle);

        if (newTitle === null) return; // Отменили

        setIsUpdating(true);

        try {
            await update({ id: documentId, title: newTitle.trim() || "Untitled" });
            toast.success("Document renamed");
        } catch (error) {
            toast.error("Something went wrong");
        } finally {
            setIsUpdating(false);
        }
    };

    return (
        <div
            onClick={handleRename}
            style={{ opacity: isUpdating ? 0.5 : 1, cursor: 'pointer' }}
        >
            {children}
        </div>
    );
};