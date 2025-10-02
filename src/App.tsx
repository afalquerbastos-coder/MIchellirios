import { Brain, TrendingUp, Users, CheckCircle, Star, MessageCircle, Instagram } from 'lucide-react';

function App() {
  const whatsappNumber = '5522998148209';
  const whatsappMessage = encodeURIComponent('Olá Michelli! Gostaria de saber mais sobre a mentoria.');
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  const instagramLink = 'https://instagram.com/michelli.rios';

  const benefits = [
    'Estratégias comprovadas para atrair mais pacientes',
    'Posicionamento profissional que te destaca no mercado',
    'Precificação assertiva para valorizar seu trabalho',
    'Marketing digital focado em psicólogas',
    'Gestão financeira do seu consultório',
    'Suporte personalizado durante toda a jornada'
  ];

  const testimonials = [
    {
      name: 'Dra. Ana Paula Silva',
      text: 'A mentoria da Michelli transformou minha prática! Consegui triplicar meus ganhos em 6 meses.',
      role: 'Psicóloga Clínica'
    },
    {
      name: 'Dra. Juliana Costa',
      text: 'Aprendi a me posicionar como especialista e hoje tenho uma agenda sempre cheia.',
      role: 'Neuropsicóloga'
    },
    {
      name: 'Dra. Fernanda Oliveira',
      text: 'Michelli me ajudou a estruturar meu consultório e aumentar significativamente minha renda.',
      role: 'Psicóloga Organizacional'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="bg-gradient-to-br from-emerald-50 to-teal-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Brain className="w-4 h-4" />
              Neuropsicóloga & Mentora
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Transforme Sua Carreira e{' '}
              <span className="text-emerald-600">Multiplique Seus Ganhos</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Mentoria exclusiva para psicólogas que desejam construir uma prática próspera e lucrativa
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <MessageCircle className="w-5 h-5" />
                Agendar Conversa no WhatsApp
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-gray-600 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-600" />
                <span>Sem compromisso</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-600" />
                <span>Atendimento personalizado</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-600" />
                <span>Resultados comprovados</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Olá, sou a <span className="text-emerald-600">Michelli Rios</span>
              </h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Neuropsicóloga especializada em mentoria para profissionais da psicologia que desejam alcançar a independência financeira através de suas práticas.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Depois de anos ajudando centenas de psicólogas a transformarem suas carreiras, desenvolvi um método comprovado que une estratégias de negócios com a essência do cuidado humanizado.
              </p>
              <div className="flex items-center gap-4 text-gray-700 mb-8">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-emerald-600" />
                  <span className="font-semibold">Resultados reais</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-emerald-600" />
                  <span className="font-semibold">Mentoria personalizada</span>
                </div>
              </div>
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 border-l-4 border-emerald-600">
                <div className="flex items-start gap-3">
                  <Brain className="w-8 h-8 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Minha Missão</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Empoderar psicólogas a construírem práticas sustentáveis e lucrativas, onde o sucesso financeiro anda lado a lado com o propósito de transformar vidas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-emerald-200 to-teal-200 rounded-2xl opacity-20 blur-xl"></div>
                <img
                  src="/6a5bceac-eb3f-4695-9603-227f53167f8a.jpg"
                  alt="Michelli Rios - Neuropsicóloga e Mentora"
                  className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              O Que Você Vai Conquistar
            </h2>
            <p className="text-xl text-gray-600">
              Transforme sua prática com estratégias comprovadas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-emerald-600" />
                  </div>
                  <p className="text-gray-700 font-medium leading-relaxed">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Histórias de Sucesso
            </h2>
            <p className="text-xl text-gray-600">
              Veja o que minhas mentoradas têm a dizer
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-emerald-500 text-emerald-500" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                <div className="border-t border-emerald-200 pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 to-teal-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Pronta Para Transformar Sua Carreira?
          </h2>
          <p className="text-xl text-emerald-50 mb-8">
            Vamos conversar sobre como a mentoria pode impulsionar seus resultados
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-emerald-600 px-10 py-5 rounded-lg font-bold text-lg hover:bg-gray-50 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1"
          >
            <MessageCircle className="w-6 h-6" />
            Falar com Michelli no WhatsApp
          </a>
          <p className="mt-6 text-emerald-50 text-sm">
            Resposta rápida • Atendimento personalizado
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">Michelli Rios</h3>
            <p className="text-gray-400">Neuropsicóloga & Mentora de Psicólogas</p>
          </div>
          <div className="flex flex-col gap-4 mb-6">
            <div className="flex justify-center items-center gap-2">
              <MessageCircle className="w-5 h-5 text-emerald-400" />
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                (22) 99814-8209
              </a>
            </div>
            <div className="flex justify-center items-center gap-2">
              <Instagram className="w-5 h-5 text-emerald-400" />
              <a
                href={instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                @michelli.rios
              </a>
            </div>
          </div>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Michelli Rios. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
