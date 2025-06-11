import { useToast } from "@/hooks/use-toast";
import { CheckCircle, Loader, XCircle } from "lucide-react";

export function useSuccessToast() {
    const { toast } = useToast();

    return (message: any, alterMessage: string) => {
        toast({
            description: (
                <div className="flex flex-row gap-1">
                    <CheckCircle className="w-5 h-5 text-roxo_principal" />
                    <p className="text-roxo_principal">{message?.data?.message || alterMessage}</p>
                </div>
            ),
            variant: "default",
        });
    };
}

export function useLoadingToast() {
    const { toast } = useToast();

    return (message?: string) => {
        toast({
            description: (
                <div className="flex items-center gap-2">
                    <Loader className="w-5 h-5 animate-spin text-roxo_principal" />
                    <span className="text-roxo_principal">{message ? message : "Processando"}</span>
                </div>
            ),
        });
    };
}

export function useErrorToast() {
    const { toast } = useToast();

    return (message: any, alterMessage: string) => {
        toast({
            description: (
                <div className="flex flex-row gap-1">
                    <XCircle className="w-5 h-5 text-white" />
                    <p className="text-white">
                        {message?.response?.data?.error || message?.message || message?.data?.message || message?.data?.error || alterMessage}
                    </p>
                </div>
            ),
            variant: "destructive",
        });
    };
}

export function useInfoToast() {
    const { toast } = useToast();

    return (message: string) => {
        toast({
            description: (
                <div className="flex flex-row gap-1">
                    <p className="text-roxo_principal">{message}</p>
                </div>
            ),
            variant: "default",
        });
    };
}
