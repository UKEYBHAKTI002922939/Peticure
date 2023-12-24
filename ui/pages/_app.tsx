import { AppPropsWithLayout } from "@/common/types/page";
import { openSans } from "@/common/utils/fonts";
import "@/styles/globals.scss";
import { NextIntlClientProvider } from "next-intl";
import { useRouter } from "next/router";
import 'semantic-ui-css/semantic.min.css'

/**
 * The main App component of the application.
 * @ {AppPropsWithLayout} Component - The component to render.
 *  {AppPropsWithLayout}  - The props to pass to the component.
 * @ The rendered component with the layout applied.
 */
export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const router = useRouter();
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <NextIntlClientProvider
      locale={router.locale}
      timeZone="US/Eastern"
      messages={pageProps.messages}
    >
      {getLayout(
        <>
          <style jsx global>{`
          html {
            font-family: ${openSans.style.fontFamily};
            height: 100dvh;
          }
        `}</style>
          <Component {...pageProps} />
        </>
      )}
    </NextIntlClientProvider>
  );
}
