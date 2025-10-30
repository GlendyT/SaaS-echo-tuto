"use client";
import { useVapi } from "@/modules/widget/hooks/use-vapi";
import { Button } from "@workspace/ui/components/button";

export default function Page() {
  const {
    isSpeaking,
    isConnecting,
    isConnected,
    transcript,
    startCall,
    endCall,
  } = useVapi();
  return (
    <div className="flex flex-col items-center justify-center min-h-svh max-w-md mx-auto w-full">
      <p className="">apps/widget</p>
      <Button onClick={() => startCall()}> Start Call</Button>
      <Button onClick={() => endCall()} variant="destructive">
        {" "}
        end Call
      </Button>

      <p className="">isConnected: {`${isConnected}`}</p>
      <p className="">isConnecting: {`${isConnecting}`}</p>
      <p className="">isSpeaking: {`${isSpeaking}`}</p>
      <p className=""> {JSON.stringify(transcript, null, 2)} </p>
    </div>
  );
}
