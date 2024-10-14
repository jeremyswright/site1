import type { Page, PageProps, Errors, ErrorBag } from "@inertiajs/core";

export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
}

export interface PagePropsInterface extends Page<PageProps> {
    flash: {
        error: string,
        message: string
    },
    auth: {
        user: User;
    },
    [key: string]: any; // Add index signature
}
