"use client";

import {ReactNode, useEffect, useMemo, useState} from "react";
import {
    LiveblocksProvider,
    RoomProvider,
    ClientSideSuspense,
} from "@liveblocks/react/suspense";
import {useParams} from "next/navigation";
import {FullScreenLoader} from "@/components/fullscreen-loader";
import {getUsers} from "@/app/documents/[documentId]/actions";
import {toast} from "sonner";

type User = { id: string; name: string; avatar: string }

export function Room({children}: { children: ReactNode }) {
    const params = useParams()

    const [users, setUsers] = useState<User[]>([]);
    const fetchUsers = useMemo(
        () => async () => {
            try {
                const list = await getUsers();
                setUsers(list);
            } catch {
                toast.error("failed to fetch users")
            }
        }, [],
    );

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]); // Добавлена зависимость!

    return (
        <LiveblocksProvider
            throttle={16}
            authEndpoint={async () => { // Изменено на функцию!
                const endpoint = "/api/liveblocks-auth";
                const room = params.documentId as string;
                const response = await fetch(endpoint, {
                    method: "POST",
                    body: JSON.stringify({ room }),
                });
                return await response.json();
            }}
            resolveUsers={({userIds}) => {
                return userIds.map(
                    (userId) => users.find((user) => user.id === userId) ?? undefined // Добавлено ?? undefined
                )
            }}
            resolveMentionSuggestions={({text}) => {
                let filteredUsers = users;
                if (text) {
                    filteredUsers = users.filter((user) =>
                        user.name.toLowerCase().includes(text.toLowerCase())
                    )
                }
                return filteredUsers.map((user) => user.id)
            }}
            resolveRoomsInfo={() => []}
        >
            <RoomProvider
                id={params.documentId as string}
                initialStorage={{ leftMargin:56, rightMargin:56}} // Добавлено initialStorage
            >
                <ClientSideSuspense fallback={<FullScreenLoader label="room loading..."/>}>
                    {children}
                </ClientSideSuspense>
            </RoomProvider>
        </LiveblocksProvider>
    );
}