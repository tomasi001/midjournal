"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function UnsubscribeClientPage() {
  const searchParams = useSearchParams();
  const emailFromUrl = searchParams.get("email");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (emailFromUrl) {
      setEmail(decodeURIComponent(emailFromUrl));
    }
  }, [emailFromUrl]);

  const handleUnsubscribe = async () => {
    setLoading(true);

    try {
      const res = await fetch("/api/unsubscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success(data.message || "You have been unsubscribed.");
      } else if (res.status === 409) {
        toast.warning(data.message || "This email has already unsubscribed.");
      } else {
        toast.error(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
      console.error(error);
    } finally {
      setLoading(false);
      setOpen(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-150px)]">
      <Card
        className="w-full max-w-3xl h-auto rounded-[20px] py-10 px-4 md:px-0"
        style={{
          background:
            "linear-gradient(256.8deg, #FFFFFF 3.24%, #EBBA82 9.54%, #F68E44 19.14%, #FB5A1B 32.14%, #B08CB0 44.23%, #8F5FAF 72.69%, #BA9DD5 90.77%, #7850A7 101.35%)",
        }}
      >
        <CardContent className="p-0 flex flex-col items-center justify-center h-full">
          <h2 className="w-full h-auto mb-8 md:mb-12 font-normal text-white text-4xl md:text-5xl text-center">
            Unsubscribe
          </h2>

          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setOpen(true);
                }}
                className="flex flex-col sm:flex-row items-center justify-between w-full max-w-2xl h-auto sm:h-[71px] bg-white rounded-[10px] p-2 sm:p-0 "
              >
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-[46px] sm:h-[54px] w-[98%] sm:w-full sm:mx-2 border-none pl-4 sm:pl-6 font-normal text-[#00000063] text-sm sm:text-base"
                  placeholder="Email"
                />
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-[193px] h-[50px] sm:h-[58px] mt-2 sm:mt-0 sm:mr-1.5 bg-black rounded-[10px] font-bold text-white text-lg sm:text-xl"
                >
                  UNSUBSCRIBE
                </Button>
              </form>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Are you sure?</DialogTitle>
                <DialogDescription>
                  This action cannot be undone. You will be removed from our
                  mailing list.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button variant="outline" onClick={() => setOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={handleUnsubscribe} disabled={loading}>
                  {loading ? "UNSUBSCRIBING..." : "Yes, unsubscribe"}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <p className="w-full max-w-md mt-6 font-normal text-white text-xs text-center px-4 sm:px-0">
            We&apos;re sorry to see you go.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
