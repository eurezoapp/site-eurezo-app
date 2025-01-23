import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface TermsProps {
  fontSize: number;
}

export const Terms: React.FC<TermsProps> = ({ fontSize }) => {
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
              Termos de Uso
            </h1>

            <div className="prose max-w-none">
              <p className="mb-4">
                Última atualização: {new Date().toLocaleDateString('pt-BR')}
              </p>

              <div className="space-y-6">
                <section>
                  <h2 className="text-xl font-semibold mb-2" style={{ color: '#503d2e' }}>
                    1. Aceitação dos Termos
                  </h2>
                  <p>
                    Ao acessar e usar o aplicativo EuRezo ("aplicativo"), você concorda com estes Termos de Uso e com nossa Política de Privacidade. Se você não concordar com qualquer parte destes termos, não use o aplicativo.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-2" style={{ color: '#503d2e' }}>
                    2. Descrição do Serviço
                  </h2>
                  <p>
                    O EuRezo é um aplicativo gratuito que disponibiliza orações e conteúdo religioso católico. O serviço é fornecido "como está" e pode ser modificado ou interrompido a qualquer momento.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-2" style={{ color: '#503d2e' }}>
                    3. Uso do Aplicativo
                  </h2>
                  <p>
                    Ao usar o aplicativo, você concorda em:
                  </p>
                  <ul className="list-disc ml-6">
                    <li>Usar o serviço apenas para fins lícitos e de acordo com estes termos</li>
                    <li>Não tentar acessar áreas restritas do aplicativo</li>
                    <li>Não interferir no funcionamento normal do aplicativo</li>
                    <li>Não distribuir malware ou realizar ataques ao serviço</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-2" style={{ color: '#503d2e' }}>
                    4. Propriedade Intelectual
                  </h2>
                  <p>
                    4.1. Todo o conteúdo do aplicativo, incluindo textos, imagens, orações, layout e código-fonte, é protegido por direitos autorais.
                  </p>
                  <p>
                    4.2. É proibida a reprodução, distribuição ou modificação do conteúdo sem autorização prévia.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-2" style={{ color: '#503d2e' }}>
                    5. Privacidade e Proteção de Dados
                  </h2>
                  <p>
                    5.1. O tratamento de dados pessoais é realizado de acordo com a Lei Geral de Proteção de Dados (LGPD).
                  </p>
                  <p>
                    5.2. Para mais informações, consulte nossa Política de Privacidade.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-2" style={{ color: '#503d2e' }}>
                    6. Limitação de Responsabilidade
                  </h2>
                  <p>
                    6.1. O aplicativo é fornecido "como está", sem garantias de qualquer tipo.
                  </p>
                  <p>
                    6.2. Não nos responsabilizamos por:
                  </p>
                  <ul className="list-disc ml-6">
                    <li>Interrupções no serviço</li>
                    <li>Perdas ou danos decorrentes do uso do aplicativo</li>
                    <li>Conteúdo de sites externos linkados</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-2" style={{ color: '#503d2e' }}>
                    7. Modificações
                  </h2>
                  <p>
                    7.1. Reservamos o direito de modificar estes termos a qualquer momento.
                  </p>
                  <p>
                    7.2. Alterações significativas serão notificadas através do aplicativo.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-2" style={{ color: '#503d2e' }}>
                    8. Legislação Aplicável
                  </h2>
                  <p>
                    Estes termos são regidos pelas leis da República Federativa do Brasil.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-2" style={{ color: '#503d2e' }}>
                    9. Contato
                  </h2>
                  <p>
                    Para questões relacionadas a estes termos, entre em contato através do e-mail: guthierresc@hotmail.com
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