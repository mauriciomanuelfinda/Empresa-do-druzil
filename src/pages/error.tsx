import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { AlertCircle, Home, ArrowLeftCircle } from 'lucide-react';

export default function Error() {
    const navigate = useNavigate();

    const handleGoHome = () => navigate('/');

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-cinza_escuro to-[#3a3b3c] text-white">
            <div className="flex flex-col items-center p-8 rounded-2xl shadow-xl bg-white text-cinza_escuro border border-gray-200">
                <AlertCircle className="w-24 h-24 mb-6 text-dourado" />
                <h1 className="text-6xl font-bold mb-4 flex items-center gap-2">
                    <ArrowLeftCircle className="w-10 h-10 text-dourado" />
                    404
                </h1>
                <h2 className="text-2xl mb-6">Página não encontrada</h2>
                <p className="text-center mb-8 max-w-md">
                    A página que você está procurando não existe ou foi removida.
                </p>
                <Button 
                    onClick={handleGoHome} 
                    className="bg-dourado hover:bg-[#d9a137] text-cinza_escuro px-6 py-3 rounded-full flex items-center gap-2 font-medium"
                >
                    <Home className="w-5 h-5" />
                    Voltar para o início
                </Button>
            </div>
        </div>
    );
}