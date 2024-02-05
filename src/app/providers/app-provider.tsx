import { ComposeChildren } from "@/shared/lib/react";


export function AppProvider({ children }: { children?: React.ReactNode }) {
    // const { lang } = useLang();
    return (
        <ComposeChildren>
            {/*<I18nProvider lang={lang} />*/}
            {/*<Confirmations />*/}
            {/*<Toasts config={{ lifeTime: 3000 }} />*/}
            {children}
        </ComposeChildren>
    );
}
