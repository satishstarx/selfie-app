import useUser from "@/hooks/useUser";
import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import ThemedLoader from "../ThemedLoader";

export default function GuestOnly({ children }: { children: React.ReactNode }) {
    const { user, authChecked } = useUser();
    const router = useRouter();

    useEffect(() => {
        if (authChecked && user !== null) {
            router.replace("/profile");
        }
    }, [user, authChecked]);

    if (!authChecked || user) {
        return (
            <ThemedLoader />
        );
    }

    return children
}
