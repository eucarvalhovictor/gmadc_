import React from 'react';
import { FileText, DollarSign, Megaphone, BookOpen } from 'lucide-react';

const Transparency: React.FC = () => {
  const downloadDocument = (documentName: string) => {
    alert(`Simulando download do documento: "${documentName}".\nEm um site real, aqui seria o link para o arquivo.`);
  };

  return (
    <section id="transparencia" className="py-20 bg-gray-50 min-h-[50vh]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-purple-600 font-semibold tracking-wider text-sm uppercase">Nossa Honestidade</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">Portal da Transparência</h2>
          <div className="w-20 h-1.5 bg-purple-600 mx-auto rounded-full mb-6" />
          <p className="text-gray-600 text-lg">
            No GMADC, a transparência é um pilar fundamental. Acreditamos que todos têm o direito de acompanhar nossas ações, a origem e aplicação de cada recurso, garantindo a confiança e a integridade de nosso trabalho.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Relatórios de Atividades Anuais */}
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border-t-4 border-purple-600">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mb-6">
              <FileText size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Relatórios de Atividades Anuais</h3>
            <p className="text-gray-600 mb-6">Conheça nossas ações, projetos e resultados anuais detalhados.</p>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => downloadDocument('Relatório Anual 2023')} 
                  className="w-full text-left flex items-center justify-between py-2 px-4 rounded-lg bg-purple-50 text-purple-700 hover:bg-purple-100 transition-colors"
                >
                  <span>Relatório Anual 2023</span>
                  <span className="text-sm font-medium">Download</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => downloadDocument('Relatório Anual 2022')} 
                  className="w-full text-left flex items-center justify-between py-2 px-4 rounded-lg bg-purple-50 text-purple-700 hover:bg-purple-100 transition-colors"
                >
                  <span>Relatório Anual 2022</span>
                  <span className="text-sm font-medium">Download</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Prestações de Contas */}
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border-t-4 border-purple-400">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mb-6">
              <DollarSign size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Prestações de Contas</h3>
            <p className="text-gray-600 mb-6">Acompanhe a aplicação dos recursos financeiros recebidos e gastos.</p>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => downloadDocument('Balanço Patrimonial 2023')} 
                  className="w-full text-left flex items-center justify-between py-2 px-4 rounded-lg bg-purple-50 text-purple-700 hover:bg-purple-100 transition-colors"
                >
                  <span>Balanço Patrimonial 2023</span>
                  <span className="text-sm font-medium">Download</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => downloadDocument('Demonstrativo de Resultados 2023')} 
                  className="w-full text-left flex items-center justify-between py-2 px-4 rounded-lg bg-purple-50 text-purple-700 hover:bg-purple-100 transition-colors"
                >
                  <span>Demonstrativo de Resultados 2023</span>
                  <span className="text-sm font-medium">Download</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Editais e Comunicados */}
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border-t-4 border-purple-300">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mb-6">
              <Megaphone size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Editais e Comunicados</h3>
            <p className="text-gray-600 mb-6">Fique por dentro de nossos editais, processos seletivos e comunicados importantes.</p>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => downloadDocument('Edital de Seleção Voluntários 2024')} 
                  className="w-full text-left flex items-center justify-between py-2 px-4 rounded-lg bg-purple-50 text-purple-700 hover:bg-purple-100 transition-colors"
                >
                  <span>Edital de Seleção Voluntários 2024</span>
                  <span className="text-sm font-medium">Download</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Estatuto Social e Regimentos */}
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border-t-4 border-purple-200">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mb-6">
              <BookOpen size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Estatuto Social e Regimentos</h3>
            <p className="text-gray-600 mb-6">Acesse os documentos que regem legalmente nossa organização.</p>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => downloadDocument('Estatuto Social GMADC')} 
                  className="w-full text-left flex items-center justify-between py-2 px-4 rounded-lg bg-purple-50 text-purple-700 hover:bg-purple-100 transition-colors"
                >
                  <span>Estatuto Social GMADC</span>
                  <span className="text-sm font-medium">Download</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => downloadDocument('Regimento Interno')} 
                  className="w-full text-left flex items-center justify-between py-2 px-4 rounded-lg bg-purple-50 text-purple-700 hover:bg-purple-100 transition-colors"
                >
                  <span>Regimento Interno</span>
                  <span className="text-sm font-medium">Download</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-16 max-w-3xl mx-auto">
          <p className="text-gray-600 text-lg">
            Tem alguma dúvida ou sugestão sobre nossa transparência? 
            Entre em contato conosco através de nossos <a href="#contato" className="text-purple-600 font-semibold hover:underline">canais de atendimento</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Transparency;