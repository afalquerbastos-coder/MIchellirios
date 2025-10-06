import { Brain, TrendingUp, Users, CheckCircle, Star, MessageCircle, Instagram, Gift } from 'lucide-react';
import { useState, FormEvent } from 'react';
import { saveLead } from './lib/supabase';

function App() {
  const whatsappNumber = '5522998148209';
  const whatsappMessage = encodeURIComponent('Olá Michelli! Gostaria de saber mais sobre a mentoria.');
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  const instagramLink = 'https://instagram.com/michelli.rios';

  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      await saveLead(formData);
      setSubmitMessage('Obrigada! Você ganhou seu brinde! Em breve entraremos em contato.');
      setFormData({ name: '', email: '', phone: '' });
    } catch (error: any) {
      if (error.code === '23505') {
        setSubmitMessage('Este e-mail já está cadastrado!');
      } else {
        setSubmitMessage('Erro ao enviar. Tente novamente.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

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
      name: '@psigrasielly',
      text: 'A mentoria tem sido fundamental nesse processo. Ela me ajuda a estruturar minha carreira, enxergar possibilidades e ganhar clareza sobre os passos que preciso dar. Hoje consigo visualizar melhor meu caminho, com mais segurança e direcionamento para construir uma prática sólida e alinhada ao que acredito. Obrigada Michelli Rios pelo apoio.',
      role: 'Psicóloga',
      instagram: 'https://instagram.com/psigrasielly'
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
            <div className="mb-6 flex justify-center">
              <img
                src="/logotipo amarelo.png"
                alt="Michelli Rios - Neuropsicóloga"
                className="h-24 md:h-32 w-auto"
              />
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Rumo aos 20K:{' '}
              <span className="text-emerald-600">o próximo passo da sua carreira como psicóloga</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Mentoria exclusiva para psicólogas que querem crescer profissionalmente sem sacrificar o que realmente importa
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
                Psicóloga especialista em neuropsicologia, com experiência em ajudar psicólogas a reestruturarem seus consultórios para modelos sustentáveis.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Desenvolvi um método que permite você trabalhar MELHOR, não mais. Construir um consultório estratégico, previsível e sustentável, conquistando prosperidade de forma leve, sem abrir mão da vida pessoal.
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
                      Ajudar psicólogas a construírem carreiras prósperas sem abrir mão do que realmente importa: saúde, família e qualidade de vida.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-emerald-200 to-teal-200 rounded-2xl opacity-20 blur-xl"></div>
                <img
                  src="/b1094d67-534a-40d4-ad76-a62948b27514.jpg"
                  alt="Michelli Rios - Neuropsicóloga e Mentora"
                  className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
                />
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
                  <div className="flex items-center gap-2">
                    <Instagram className="w-4 h-4 text-emerald-600" />
                    <span className="text-sm font-semibold text-gray-900">@michelli.rios</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-gradient-to-br from-rose-50 to-red-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Agenda Lotada, Vida Vazia
            </h2>
            <p className="text-xl text-gray-600">
              Você se identifica com alguma dessas situações?
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-rose-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Consultório cheio, mas sem tempo para viver</h3>
              <p className="text-gray-700 leading-relaxed">
                Agenda lotada, lista de espera crescendo, mas sem tempo para família, lazer e descanso. O consultório consome toda sua energia.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-rose-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Burnout silencioso</h3>
              <p className="text-gray-700 leading-relaxed">
                Você ajuda pacientes todos os dias, mas não consegue cuidar de si mesma. Ansiedade, insônia e exaustão se tornaram rotina.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-rose-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Renda estagnada</h3>
              <p className="text-gray-700 leading-relaxed">
                Trabalha mais horas, mas o ganho não cresce na mesma proporção. Esforço máximo, resultado mínimo.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-rose-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Repetição infinita</h3>
              <p className="text-gray-700 leading-relaxed">
                Sempre o mesmo ciclo, sem mudanças reais. Você sabe que precisa mudar, mas não sabe por onde começar.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-rose-600 to-red-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Se isso continuar...</h3>
            <ul className="space-y-3 text-lg">
              <li>Você perderá momentos preciosos com quem ama</li>
              <li>Sua saúde mental e física estará em risco</li>
              <li>Relacionamentos ficarão em segundo plano</li>
              <li>A estagnação profissional será disfarçada de produtividade</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Existe um Caminho Melhor
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            E se você pudesse trabalhar MELHOR, não mais?
          </p>

          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-xl shadow-lg">
              <CheckCircle className="w-12 h-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Consultório estratégico e sustentável</h3>
              <p className="text-gray-700 leading-relaxed">
                Construa um modelo de negócio previsível que respeita seu tempo e sua saúde.
              </p>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-xl shadow-lg">
              <CheckCircle className="w-12 h-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Prosperidade de forma leve</h3>
              <p className="text-gray-700 leading-relaxed">
                Aumente sua renda sem abrir mão da vida pessoal, da família e do descanso.
              </p>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-xl shadow-lg">
              <CheckCircle className="w-12 h-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Liberdade e presença</h3>
              <p className="text-gray-700 leading-relaxed">
                Tenha tempo com quem você ama e energia para aproveitar a vida.
              </p>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-xl shadow-lg">
              <CheckCircle className="w-12 h-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Equilíbrio real</h3>
              <p className="text-gray-700 leading-relaxed">
                Carreira próspera E vida pessoal plena. Você não precisa escolher.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Metodologia em 6 Passos
            </h2>
            <p className="text-xl text-gray-600">
              Um caminho estruturado para sua transformação profissional
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-emerald-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Diagnóstico e Reposicionamento</h3>
              <p className="text-gray-700 leading-relaxed">
                Análise completa do seu consultório e definição de novos caminhos estratégicos.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-emerald-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Modelo de Negócio Sustentável</h3>
              <p className="text-gray-700 leading-relaxed">
                Construa uma estrutura que funciona sem esgotar você no processo.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-emerald-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Autoridade e Visibilidade</h3>
              <p className="text-gray-700 leading-relaxed">
                Posicione-se como referência e atraia os pacientes ideais para você.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-emerald-600">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Captação Previsível de Pacientes</h3>
              <p className="text-gray-700 leading-relaxed">
                Sistema consistente para manter sua agenda equilibrada e sustentável.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-emerald-600">5</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Gestão e Processos</h3>
              <p className="text-gray-700 leading-relaxed">
                Organize seu consultório com processos simples que economizam tempo.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-emerald-600">6</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Consolidação e Plano de Ação</h3>
              <p className="text-gray-700 leading-relaxed">
                Plano personalizado para manter e expandir seus resultados de forma sustentável.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Resultados Reais que Você Pode Conquistar
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="text-5xl font-bold mb-2">25-40%</div>
              <p className="text-xl">Redução nas horas de trabalho</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="text-5xl font-bold mb-2">30-60%</div>
              <p className="text-xl">Aumento na renda mensal</p>
            </div>
          </div>

          <div className="mt-12 space-y-4 text-lg">
            <div className="flex items-center justify-center gap-3">
              <CheckCircle className="w-6 h-6 flex-shrink-0" />
              <span>Previsibilidade e organização no consultório</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <CheckCircle className="w-6 h-6 flex-shrink-0" />
              <span>Mais equilíbrio entre vida pessoal e profissional</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <CheckCircle className="w-6 h-6 flex-shrink-0" />
              <span>Energia renovada para a prática clínica</span>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Capture Form - Gift Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-yellow-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-amber-500 to-yellow-500 px-8 py-12 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-6 animate-pulse">
                <Gift className="w-10 h-10 text-amber-500" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Você Ganhou um Brinde!
              </h2>
              <p className="text-xl text-amber-50">
                Preencha o formulário abaixo e receba seu presente exclusivo
              </p>
            </div>

            <div className="p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all outline-none"
                    placeholder="Digite seu nome completo"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all outline-none"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all outline-none"
                    placeholder="(00) 00000-0000"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 text-white font-bold text-lg py-4 rounded-lg hover:from-amber-600 hover:to-yellow-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Enviando...' : 'Quero Meu Brinde!'}
                </button>

                {submitMessage && (
                  <div className={`p-4 rounded-lg text-center font-medium ${
                    submitMessage.includes('Obrigada')
                      ? 'bg-green-50 text-green-800 border-2 border-green-200'
                      : 'bg-red-50 text-red-800 border-2 border-red-200'
                  }`}>
                    {submitMessage}
                  </div>
                )}
              </form>
            </div>
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
                  {'instagram' in testimonial ? (
                    <a
                      href={testimonial.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-gray-900 hover:text-emerald-600 transition-colors flex items-center gap-2"
                    >
                      <Instagram className="w-4 h-4" />
                      {testimonial.name}
                    </a>
                  ) : (
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  )}
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
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Você se tornou psicóloga para transformar vidas
          </h2>
          <p className="text-2xl text-emerald-50 mb-4">
            Mas a sua também merece ser vivida plenamente
          </p>
          <p className="text-xl text-emerald-100 mb-8 font-semibold">
            É hora de construir o consultório que respeita sua vida
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-emerald-600 px-10 py-5 rounded-lg font-bold text-lg hover:bg-gray-50 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1"
          >
            <MessageCircle className="w-6 h-6" />
            Quero Conhecer a Mentoria
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
