import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface PrivacyProps {
  fontSize: number;
}

export const Privacy: React.FC<PrivacyProps> = ({ fontSize }) => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#e5d6ac', fontSize: `${fontSize}px` }}>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6">
            <Link 
              to="/" 
              className="inline-flex items-center text-[#503d2e] hover:underline mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Link>
            
            <h1 className="text-2xl font-bold mb-6" style={{ color: '#503d2e' }}>
              Política de Privacidade
            </h1>

            <div className="prose max-w-none">
              <p className="mb-4">
                Última atualização: {new Date().toLocaleDateString('pt-BR')}
              </p>

              <div className="space-y-6">
                <section>
                  <h2 className="text-xl font-semibold mb-2" style={{ color: '#503d2e' }}>
                    1. Introdução
                  </h2>
                  <p>
                    Esta Política de Privacidade descreve como o EuRezo ("nós", "nosso" ou "aplicativo") coleta, usa e protege suas informações pessoais, em conformidade com a Lei Geral de Proteção de Dados (LGPD) - Lei nº 13.709/2018.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-2" style={{ color: '#503d2e' }}>
                    2. Dados Coletados
                  </h2>
                  <p>
                    2.1. Dados coletados automaticamente:
                  </p>
                  <ul className="list-disc ml-6 mb-4">
                    <li>Informações do dispositivo (tipo, sistema operacional)</li>
                    <li>Dados de uso do aplicativo (orações acessadas, tempo de uso)</li>
                    <li>Endereço IP</li>
                    <li>Data e hora de acesso</li>
                  </ul>
                  <p>
                    2.2. Dados fornecidos voluntariamente:
                  </p>
                  <ul className="list-disc ml-6">
                    <li>Preferências de configuração do aplicativo</li>
                    <li>Feedback e comunicações enviadas por você</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-2" style={{ color: '#503d2e' }}>
                    3. Finalidade do Tratamento
                  </h2>
                  <p>
                    Utilizamos seus dados para:
                  </p>
                  <ul className="list-disc ml-6">
                    <li>Melhorar a experiência do usuário</li>
                    <li>Gerar estatísticas de uso anônimas</li>
                    <li>Resolver problemas técnicos</li>
                    <li>Enviar comunicações importantes sobre o serviço</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-2" style={{ color: '#503d2e' }}>
                    4. Base Legal
                  </h2>
                  <p>
                    O tratamento de dados pessoais é realizado com base nas seguintes hipóteses da LGPD:
                  </p>
                  <ul className="list-disc ml-6">
                    <li>Consentimento do titular</li>
                    <li>Cumprimento de obrigação legal</li>
                    <li>Legítimo interesse</li>
                    <li>Execução de contrato</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-2" style={{ color: '#503d2e' }}>
                    5. Compartilhamento de Dados
                  </h2>
                  <p>
                    Seus dados podem ser compartilhados com:
                  </p>
                  <ul className="list-disc ml-6">
                    <li>Prestadores de serviços essenciais para o funcionamento do aplicativo</li>
                    <li>Autoridades públicas, quando exigido por lei</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-2" style={{ color: '#503d2e' }}>
                    6. Direitos do Titular
                  </h2>
                  <p>
                    Você tem direito a:
                  </p>
                  <ul className="list-disc ml-6">
                    <li>Confirmar a existência de tratamento de dados</li>
                    <li>Acessar seus dados</li>
                    <li>Corrigir dados incompletos ou desatualizados</li>
                    <li>Solicitar a anonimização ou eliminação de dados desnecessários</li>
                    <li>Revogar o consentimento</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-2" style={{ color: '#503d2e' }}>
                    7. Segurança
                  </h2>
                  <p>
                    Implementamos medidas técnicas e organizacionais apropriadas para proteger seus dados pessoais contra acesso não autorizado, alteração, divulgação ou destruição não autorizada.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-2" style={{ color: '#503d2e' }}>
                    8. Contato
                  </h2>
                  <p>
                    Para exercer seus direitos ou esclarecer dúvidas sobre esta política, entre em contato através do e-mail: guthierresc@hotmail.com
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};