"use client";
import { useAtomValue } from "jotai";
import { WidgetAuthScreen } from "@/modules/widget/ui/screens/widget-auth-screen";
import { screenAtom } from "@/modules/widget/atoms/widget-atoms";
import { WidgetErrorScreen } from './widget-error-screen';
import { WidgetLoadingScreen } from './widget-loading-screen';

interface Props {
  organizationId: string | null;
}

export const WidgetView = ({ organizationId }: Props) => {
  const screen = useAtomValue(screenAtom);

  const screenCompoents = {
    error: <WidgetErrorScreen/>,
    loading: <WidgetLoadingScreen organizationId={organizationId} />,
    auth: <WidgetAuthScreen/> ,
    voice: <div>Voice</div>,
    inbox: <div>Inbox</div>,
    selection: <div>Selection</div>,
    chat: <div>Chat</div>,
    contact: <div>Contact</div>,
  };

  return (
    <main className=" min-h-screen min-w-screen flex h-full w-full flex-col overflow-hidden rounded-xl border bg-muted">
      {screenCompoents[screen]}
    </main>
  );
};
