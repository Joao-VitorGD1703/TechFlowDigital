<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import emailjs from '@emailjs/browser'
import { useToast } from '@/composables/Utils'
import projetoRyg from '@/assets/img/projeto01.png'
import projetoRevinn from '@/assets/img/projeto02.png'

const WHATSAPP = '5511982139034'

let menuOpen = ref(false)

const secoes = [
  ['projetos', 'Projetos'],
  ['servicos', 'Serviços'],
  ['como-funciona', 'Como funciona'],
  ['duvidas', 'Dúvidas'],
]

// Marca no header a seção que está na tela
let ativa = ref('')
let observer
onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) ativa.value = e.target.id })
  }, { rootMargin: '-40% 0px -55% 0px' })
  ;['inicio-hero', ...secoes.map(([id]) => id), 'contato'].forEach((id) => {
    const el = document.getElementById(id)
    if (el) observer.observe(el)
  })
})
onBeforeUnmount(() => observer?.disconnect())

// Hero: o visitante digita o nome do negócio e vê um esboço do site
// Cada tipo tem um esboço com identidade própria no template
const tipos = {
  restaurante: { label: 'Restaurante', exemplo: 'Padaria da Ana' },
  estudio: { label: 'Estúdio', exemplo: 'Studio Lume' },
  consultoria: { label: 'Consultoria', exemplo: 'Moraes Consultoria' },
  loja: { label: 'Loja', exemplo: 'Casa Ninho' },
}

const cardapioMock = [['Pão de queijo', '6'], ['Prato feito da casa', '28'], ['Café coado', '7']]
const diasMock = [['seg', '12'], ['ter', '13'], ['qua', '14'], ['qui', '15']]
const etapasMock = [['I', 'Diagnóstico'], ['II', 'Plano'], ['III', 'Execução']]
const produtosMock = [
  { nome: 'Vela de lavanda', preco: '49', cls: 't-vela' },
  { nome: 'Caneca esmaltada', preco: '69', cls: 't-caneca' },
  { nome: 'Ecobag de algodão', preco: '39', cls: 't-bag' },
]

let negocio = ref('')
let tipo = ref('restaurante')

const nomeExibido = computed(() => negocio.value.trim() || tipos[tipo.value].exemplo)
const dominio = computed(() => {
  const slug = nomeExibido.value
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .toLowerCase().replace(/[^a-z0-9]+/g, '')
  return (slug || 'seunegocio') + '.com.br'
})
const mock = computed(() => tipos[tipo.value])

const whatsappLink = computed(() => {
  const texto = negocio.value.trim()
    ? `Olá! Quero um site para ${negocio.value.trim()} (${mock.value.label.toLowerCase()}).`
    : 'Olá! Quero conversar sobre um site.'
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(texto)}`
})

const pedirOrcamento = () => {
  if (negocio.value.trim() && !message.value) {
    message.value = `Quero um site para ${negocio.value.trim()} (${mock.value.label.toLowerCase()}).`
  }
  document.getElementById('contato')?.scrollIntoView()
  document.getElementById('name')?.focus({ preventScroll: true })
}

// Formulário de contato
let name = ref('')
let email = ref('')
let phone = ref('')
let message = ref('')
let sending = ref(false)
let formError = ref('')

let sendEmail = (e) => {
  e.preventDefault()
  formError.value = ''
  if (name.value == '' || email.value == '' || message.value == '') {
    formError.value = 'Preencha nome, email e mensagem para enviar.'
    return
  }
  const templateParms = {
    from_name: name.value,
    email: email.value,
    phone: phone.value,
    message: message.value,
  }
  sending.value = true
  emailjs.send('service_qer71bv', 'template_kaicipi', templateParms, 'F8LPldd25yldNb-Wd')
    .then(() => {
      name.value = ''
      email.value = ''
      phone.value = ''
      message.value = ''
      useToast().success('Mensagem enviada. Respondemos em breve.', { timeout: 3000 })
    }, (err) => {
      console.log('Erro', err)
      formError.value = 'A mensagem não foi enviada. Tente de novo ou fale com a gente pelo WhatsApp.'
    })
    .finally(() => { sending.value = false })
}

const projetos = [
  {
    nome: 'Ryg Produtora',
    img: projetoRyg,
    segmento: 'Música e áudio',
    tipo: 'Site institucional',
    resumo: 'Site para uma produtora musical de mixagem e masterização, com as faixas do Spotify tocando direto na página.',
    feito: ['Identidade escura com roxo da marca', 'Player do Spotify integrado', 'Contato direto pelo site'],
  },
  {
    nome: 'revinn Estratégias',
    img: projetoRevinn,
    segmento: 'Hotelaria',
    tipo: 'Site institucional',
    resumo: 'Site institucional para uma consultoria de vendas online para hotéis, com um caminho claro para novos parceiros.',
    feito: ['Página institucional', 'Cadastro de hotéis parceiros', 'Layout responsivo'],
  },
]

const servicos = [
  ['Sites institucionais', 'Uma página para apresentar seu negócio, com seus serviços, endereço e contato.'],
  ['Landing pages', 'Uma página focada em uma oferta ou campanha, feita para converter visitas em contatos.'],
  ['Portfólios', 'Seu trabalho em destaque, organizado para quem precisa contratar você.'],
  ['Lojas virtuais', 'Catálogo, carrinho e pagamento integrados, prontos para vender.'],
  ['SEO', 'Estrutura e conteúdo pensados para o seu site aparecer no Google.'],
  ['Manutenção de sites', 'Atualizações, ajustes e suporte depois que o site está no ar.'],
  ['Sistemas novos', 'Sistemas sob medida para organizar processos, como agendamentos, pedidos, estoque ou cadastro de clientes.'],
  ['Manutenção de sistemas', 'Correções, melhorias e novas funções em sistemas que você já usa, mesmo que outra equipe tenha feito.'],
  ['Aplicativos', 'Aplicativos para celular e web que deixam seus clientes comprarem, agendarem e falarem com você na palma da mão.'],
]

const etapas = [
  ['Conversa', 'Entendemos seu negócio, seu público e o que o site precisa fazer.'],
  ['Proposta', 'Você recebe escopo, prazo e preço por escrito, sem custos escondidos.'],
  ['Design e desenvolvimento', 'Você acompanha o site tomando forma e aprova cada etapa.'],
  ['No ar', 'Publicamos, ligamos o site ao Google e seguimos disponíveis para suporte.'],
]

const duvidas = [
  ['Quanto custa um site?', 'Depende do tipo de site e do que ele precisa fazer. Depois da primeira conversa você recebe uma proposta com preço fechado, sem custos escondidos.'],
  ['Quanto tempo leva para ficar pronto?', 'O prazo vem na proposta, junto com o escopo. Você acompanha cada etapa e sabe exatamente o que falta até o site ir ao ar.'],
  ['Preciso já ter domínio e hospedagem?', 'Não. Orientamos você no registro do domínio e na escolha da hospedagem, e cuidamos da publicação.'],
  ['Consigo atualizar o site depois?', 'Sim. Você pode pedir ajustes quando precisar, e oferecemos manutenção contínua para quem prefere não se preocupar com isso.'],
  ['Meu site vai aparecer no Google?', 'Todo site sai com a estrutura de SEO pronta e ligado às ferramentas do Google. As primeiras posições também dependem de conteúdo e tempo, e mostramos o que fazer para chegar lá.'],
]

const ano = new Date().getFullYear()
</script>

<template>
  <div class="min-h-screen bg-papel text-tinta font-sans antialiased">
    <a href="#inicio" class="skip-link">Pular para o conteúdo</a>

    <header class="sticky top-0 z-40 bg-papel/95 backdrop-blur border-b border-nevoa">
      <div class="wrap flex items-center justify-between h-16">
        <a href="#inicio" class="flex items-center gap-2 text-[18px] font-extrabold tracking-[-0.02em]">
          <span class="logo-mark" aria-hidden="true"></span>
          TechFlow Digital
        </a>

        <nav class="hidden md:flex items-center gap-8 text-[15px] font-semibold" aria-label="Principal">
          <a
            v-for="[id, label] in secoes"
            :key="id"
            :href="`#${id}`"
            class="nav-link"
            :aria-current="ativa === id ? 'location' : null"
          >{{ label }}</a>
          <a :href="whatsappLink" target="_blank" rel="noopener noreferrer" class="btn btn-ink">
            <i class="fa-brands fa-whatsapp" aria-hidden="true"></i>
            Falar no WhatsApp
          </a>
        </nav>

        <button
          @click="menuOpen = !menuOpen"
          class="md:hidden -mr-2 p-2 text-[15px] font-semibold"
          :aria-expanded="menuOpen"
          aria-controls="menu-mobile"
        >
          {{ menuOpen ? 'Fechar' : 'Menu' }}
        </button>
      </div>

      <nav v-show="menuOpen" id="menu-mobile" class="md:hidden border-t border-nevoa" aria-label="Principal">
        <div class="wrap flex flex-col py-2 text-[18px] font-semibold">
          <a
            v-for="[id, label] in [...secoes, ['contato', 'Contato']]"
            :key="id"
            :href="`#${id}`"
            class="py-3"
            @click="menuOpen = false"
          >{{ label }}</a>
        </div>
      </nav>
    </header>

    <main id="inicio">
      <!-- Hero -->
      <section id="inicio-hero" class="wrap pt-12 pb-20 md:pt-20 md:pb-28 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div class="max-w-[36rem]">
          <h1 class="text-[40px] md:text-[64px] leading-[1.0] font-extrabold tracking-[-0.04em] text-balance">
            Sites para negócios que querem ser encontrados.
          </h1>
          <p class="mt-6 text-[18px] leading-[1.55] text-tinta/75 max-w-[30rem]">
            Criamos sites, landing pages e lojas virtuais para pequenos negócios e profissionais.
            Digite o nome do seu e veja um primeiro esboço.
          </p>

          <div class="mt-10">
            <label for="negocio" class="block text-[15px] font-semibold mb-2">Nome do seu negócio</label>
            <input
              id="negocio"
              v-model="negocio"
              type="text"
              maxlength="32"
              autocomplete="organization"
              :placeholder="tipos[tipo].exemplo"
              class="field text-[18px]"
            >

            <fieldset class="mt-5">
              <legend class="text-[15px] font-semibold mb-2">Tipo de negócio</legend>
              <div class="flex flex-wrap gap-2">
                <label v-for="(t, key) in tipos" :key="key" class="chip">
                  <input v-model="tipo" type="radio" name="tipo" :value="key" class="sr-only">
                  <span>{{ t.label }}</span>
                </label>
              </div>
            </fieldset>

            <div class="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <button type="button" class="btn btn-broto" @click="pedirOrcamento">Pedir orçamento</button>
              <a :href="whatsappLink" target="_blank" rel="noopener noreferrer" class="text-link text-[15px]">
                ou mande no WhatsApp
              </a>
            </div>
          </div>
        </div>

        <!-- Esboço ao vivo -->
        <figure class="min-w-0" aria-label="Esboço do seu site">
          <div class="browser">
            <div class="browser-bar">
              <span class="dots" aria-hidden="true"><i></i><i></i><i></i></span>
              <span class="url">{{ dominio }}</span>
            </div>
            <div class="mock" :class="`m-${tipo}`" :key="tipo">
              <!-- Restaurante: lousa verde, cardápio do dia -->
              <template v-if="tipo === 'restaurante'">
                <div class="r-top">
                  <span class="r-open"><i></i>Aberto até as 20h</span>
                  <span class="r-addr">Rua das Flores, 120</span>
                </div>
                <div class="r-hero">
                  <div class="min-w-0">
                    <p class="r-name">{{ nomeExibido }}</p>
                    <p class="r-tag">Pão quente, café coado e almoço caseiro todos os dias.</p>
                    <span class="r-cta">Fazer pedido</span>
                  </div>
                  <span class="r-plate" aria-hidden="true"></span>
                </div>
                <div class="r-menu">
                  <p class="r-menu-title">Cardápio do dia</p>
                  <ul>
                    <li v-for="[prato, preco] in cardapioMock" :key="prato">
                      <span>{{ prato }}</span><i></i><span>R$ {{ preco }}</span>
                    </li>
                  </ul>
                </div>
              </template>

              <!-- Estúdio: arco e agenda de horários -->
              <template v-else-if="tipo === 'estudio'">
                <div class="e-top">
                  <span class="e-name">{{ nomeExibido }}</span>
                  <span class="e-links"><span>Serviços</span><span>Galeria</span><span>Contato</span></span>
                </div>
                <div class="e-body">
                  <span class="e-arch" aria-hidden="true"></span>
                  <div class="e-book">
                    <p class="e-h">Escolha seu horário</p>
                    <div class="e-days">
                      <span v-for="([d, n], i) in diasMock" :key="d" :class="{ on: i === 1 }"><small>{{ d }}</small>{{ n }}</span>
                    </div>
                    <div class="e-slots">
                      <span>09:00</span><span>10:30</span><span class="on">14:00</span><span>16:30</span>
                    </div>
                    <span class="e-cta">Agendar terça, 14:00</span>
                  </div>
                </div>
              </template>

              <!-- Consultoria: editorial, gráfico e etapas -->
              <template v-else-if="tipo === 'consultoria'">
                <div class="c-top">
                  <span class="c-name">{{ nomeExibido }}</span>
                  <span class="c-links"><span>Serviços</span><span>Cases</span></span>
                  <span class="c-btn">Agendar conversa</span>
                </div>
                <div class="c-hero">
                  <div>
                    <p class="c-h">Estratégia clara para o seu negócio crescer.</p>
                    <p class="c-sub">Diagnóstico, plano e acompanhamento para pequenas e médias empresas.</p>
                  </div>
                  <svg class="c-chart" viewBox="0 0 160 100" aria-hidden="true">
                    <path class="c-grid" d="M0 25H160M0 50H160M0 75H160" />
                    <path class="c-area" d="M0 84L32 76L64 79L96 56L128 44L154 18V100H0Z" />
                    <path class="c-line" d="M0 84L32 76L64 79L96 56L128 44L154 18" />
                    <circle cx="154" cy="18" r="4.5" />
                  </svg>
                </div>
                <ol class="c-steps">
                  <li v-for="[n, t] in etapasMock" :key="n"><span>{{ n }}</span>{{ t }}</li>
                </ol>
              </template>

              <!-- Loja: faixa de frete, coleção e produtos -->
              <template v-else>
                <div class="l-strip">Frete grátis acima de R$ 199</div>
                <div class="l-top">
                  <span class="l-name">{{ nomeExibido }}</span>
                  <span class="l-cart">Sacola <b>2</b></span>
                </div>
                <div class="l-banner">
                  <p>Nova coleção</p>
                  <span>Ver tudo</span>
                </div>
                <div class="l-grid">
                  <div v-for="p in produtosMock" :key="p.nome">
                    <span class="l-thumb" :class="p.cls"><i></i></span>
                    <span class="l-pname">{{ p.nome }}</span>
                    <span class="l-price">R$ {{ p.preco }}</span>
                  </div>
                </div>
              </template>
            </div>
          </div>
          <figcaption class="mt-3 text-[15px] text-tinta/60">
            Um ponto de partida. O seu site é desenhado do zero com você.
          </figcaption>
        </figure>
      </section>

      <!-- Projetos -->
      <section id="projetos" class="bg-nevoa py-20 md:py-28">
        <div class="wrap">
          <h2 class="section-title">Projetos</h2>
          <p class="mt-4 text-[18px] leading-[1.55] text-tinta/75 max-w-[36rem]">
            Alguns sites que colocamos no ar.
          </p>

          <div class="mt-14 flex flex-col gap-20">
            <article
              v-for="(p, i) in projetos"
              :key="p.nome"
              class="grid gap-8 lg:gap-12 items-start"
              :class="i % 2 ? 'lg:grid-cols-[4fr_7fr]' : 'lg:grid-cols-[7fr_4fr]'"
            >
              <div class="shot" :class="{ 'lg:order-2': i % 2 }">
                <img :src="p.img" :alt="`Página inicial do site ${p.nome}`" loading="lazy">
              </div>
              <div class="lg:pt-6">
                <h3 class="text-[24px] md:text-[36px] font-extrabold leading-[1.1] tracking-[-0.025em]">{{ p.nome }}</h3>
                <p class="mt-4 text-[18px] leading-[1.55] text-tinta/80">{{ p.resumo }}</p>
                <dl class="mt-6 grid grid-cols-2 gap-4 py-4 border-y border-tinta/15 text-[15px]">
                  <div>
                    <dt class="text-tinta/60">Segmento</dt>
                    <dd class="mt-1 font-semibold">{{ p.segmento }}</dd>
                  </div>
                  <div>
                    <dt class="text-tinta/60">Tipo</dt>
                    <dd class="mt-1 font-semibold">{{ p.tipo }}</dd>
                  </div>
                </dl>
                <ul class="mt-6 text-[15px] leading-[1.5] space-y-2">
                  <li v-for="f in p.feito" :key="f" class="tick">{{ f }}</li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>

      <!-- Serviços -->
      <section id="servicos" class="wrap py-20 md:py-28 grid lg:grid-cols-[4fr_7fr] gap-10 lg:gap-16">
        <div>
          <h2 class="section-title">O que fazemos</h2>
          <p class="mt-4 text-[18px] leading-[1.55] text-tinta/75 max-w-[24rem]">
            De um site simples a um sistema completo, tudo sai responsivo, rápido e pronto para crescer junto com o seu negócio.
          </p>
        </div>
        <dl class="grid sm:grid-cols-2 gap-x-12">
          <div v-for="[titulo, texto] in servicos" :key="titulo" class="py-6 border-t border-tinta/15">
            <dt class="text-[18px] font-extrabold tracking-[-0.01em]">{{ titulo }}</dt>
            <dd class="mt-2 text-[15px] leading-[1.55] text-tinta/75">{{ texto }}</dd>
          </div>
        </dl>
      </section>

      <!-- Como funciona -->
      <section id="como-funciona" class="wrap pb-20 md:pb-28">
        <h2 class="section-title">Como funciona</h2>
        <ol class="mt-12 grid md:grid-cols-4 gap-10 md:gap-8 steps">
          <li v-for="([titulo, texto], i) in etapas" :key="titulo" class="step">
            <span class="step-num" aria-hidden="true">{{ i + 1 }}</span>
            <h3 class="mt-5 text-[18px] font-extrabold tracking-[-0.01em]">{{ titulo }}</h3>
            <p class="mt-2 text-[15px] leading-[1.55] text-tinta/75 max-w-[22rem]">{{ texto }}</p>
          </li>
        </ol>
      </section>

      <!-- Dúvidas -->
      <section id="duvidas" class="bg-nevoa py-20 md:py-28">
        <div class="wrap grid lg:grid-cols-[4fr_7fr] gap-10 lg:gap-16">
          <div>
            <h2 class="section-title">Dúvidas comuns</h2>
            <p class="mt-4 text-[18px] leading-[1.55] text-tinta/75 max-w-[24rem]">
              Não achou sua pergunta?
              <a :href="whatsappLink" target="_blank" rel="noopener noreferrer" class="text-link">Pergunte no WhatsApp</a>.
            </p>
          </div>
          <div class="border-b border-tinta/15">
            <details v-for="[pergunta, resposta] in duvidas" :key="pergunta" class="faq">
              <summary>
                <span>{{ pergunta }}</span>
                <span class="faq-icon" aria-hidden="true"></span>
              </summary>
              <p>{{ resposta }}</p>
            </details>
          </div>
        </div>
      </section>

      <!-- Contato -->
      <section id="contato" class="bg-tinta text-papel py-20 md:py-28">
        <div class="wrap grid lg:grid-cols-[5fr_6fr] gap-12 lg:gap-16">
          <div>
            <h2 class="section-title">Conte sobre o seu projeto</h2>
            <p class="mt-4 text-[18px] leading-[1.55] text-papel/75 max-w-[28rem]">
              Respondemos com perguntas, uma ideia de prazo e de preço. Sem compromisso.
            </p>

            <dl class="mt-10 space-y-6 text-[15px]">
              <div>
                <dt class="text-papel/60">WhatsApp</dt>
                <dd class="mt-1 text-[18px] font-semibold">
                  <a :href="whatsappLink" target="_blank" rel="noopener noreferrer" class="text-link-light">+55 (11) 98213-9034</a>
                </dd>
              </div>
              <div>
                <dt class="text-papel/60">Email</dt>
                <dd class="mt-1 text-[18px] font-semibold break-all">
                  <a href="mailto:techflowdigitallmtd@gmail.com" class="text-link-light">techflowdigitallmtd@gmail.com</a>
                </dd>
              </div>
              <div>
                <dt class="text-papel/60">Onde estamos</dt>
                <dd class="mt-1 text-[18px] font-semibold">São Paulo, atendendo todo o Brasil</dd>
              </div>
            </dl>
          </div>

          <form id="contact-form" @submit="sendEmail" class="contact-form" novalidate>
            <div>
              <label for="name">Nome</label>
              <input id="name" v-model="name" required type="text" name="name" autocomplete="name" class="field">
            </div>
            <div class="grid sm:grid-cols-2 gap-5">
              <div>
                <label for="email">Email</label>
                <input id="email" v-model="email" required type="email" name="email" autocomplete="email" class="field">
              </div>
              <div>
                <label for="phone">Telefone <span class="font-normal text-papel/60">(opcional)</span></label>
                <input id="phone" v-model="phone" type="tel" name="phone" autocomplete="tel" class="field">
              </div>
            </div>
            <div>
              <div class="flex justify-between">
                <label for="message">Mensagem</label>
                <span class="text-[15px] text-papel/60" aria-live="polite">{{ message.length }}/500</span>
              </div>
              <textarea
                id="message"
                v-model="message"
                name="message"
                required
                maxlength="500"
                rows="5"
                placeholder="O que é o seu negócio e o que o site precisa fazer?"
                class="field resize-y"
              ></textarea>
            </div>
            <p v-if="formError" class="form-error" role="alert">{{ formError }}</p>
            <button type="submit" class="btn btn-broto self-start" :disabled="sending">
              {{ sending ? 'Enviando…' : 'Enviar mensagem' }}
            </button>
          </form>
        </div>
      </section>
    </main>

    <footer class="bg-tinta text-papel/70 text-[15px]">
      <div class="wrap">
        <div class="py-12 border-t border-papel/15 grid gap-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr]">
          <div>
            <a href="#inicio" class="flex items-center gap-2 text-[18px] font-extrabold tracking-[-0.02em] text-papel">
              <span class="logo-mark logo-mark-light" aria-hidden="true"></span>
              TechFlow Digital
            </a>
            <p class="mt-3 max-w-[22rem] leading-[1.55]">Sites, landing pages e lojas virtuais para pequenos negócios e profissionais.</p>
          </div>
          <nav aria-label="Rodapé">
            <p class="font-semibold text-papel">Navegação</p>
            <ul class="mt-3 space-y-2">
              <li v-for="[id, label] in secoes" :key="id"><a :href="`#${id}`" class="footer-link">{{ label }}</a></li>
            </ul>
          </nav>
          <div>
            <p class="font-semibold text-papel">Contato</p>
            <ul class="mt-3 space-y-2">
              <li><a :href="whatsappLink" target="_blank" rel="noopener noreferrer" class="footer-link">WhatsApp</a></li>
              <li><a href="mailto:techflowdigitallmtd@gmail.com" class="footer-link">Email</a></li>
              <li>São Paulo, Brasil</li>
            </ul>
          </div>
        </div>
        <div class="py-6 border-t border-papel/15 text-papel/50">
          © {{ ano }} TechFlow Digital
        </div>
      </div>
    </footer>
  </div>
</template>

<style lang="scss">
.wrap {
  width: 100%;
  max-width: 1200px;
  margin-inline: auto;
  padding-inline: 16px;
  @media (min-width: 768px) { padding-inline: 32px; }
}

.skip-link {
  position: absolute;
  left: 16px;
  top: -100px;
  z-index: 50;
  padding: 8px 12px;
  background: theme('colors.tinta');
  color: theme('colors.papel');
  &:focus { top: 8px; }
}

:focus-visible {
  outline: 3px solid theme('colors.folha');
  outline-offset: 2px;
}
#contato :focus-visible { outline-color: theme('colors.broto'); }

.logo-mark {
  width: 14px;
  height: 14px;
  border-radius: 3px;
  background: theme('colors.broto');
  box-shadow: 5px 5px 0 theme('colors.tinta');
  margin-right: 6px;
}

.logo-mark-light { box-shadow: 5px 5px 0 theme('colors.papel'); }

.nav-link {
  color: rgba(22, 35, 59, .75);
  text-underline-offset: 8px;
  text-decoration-thickness: 2px;
  &:hover { color: theme('colors.tinta'); text-decoration-line: underline; text-decoration-color: rgba(22, 35, 59, .25); }
  &[aria-current] { color: theme('colors.tinta'); text-decoration-line: underline; text-decoration-color: theme('colors.broto'); }
}

.footer-link {
  &:hover { color: theme('colors.papel'); text-decoration: underline; text-decoration-color: theme('colors.broto'); text-underline-offset: 4px; }
}

.faq {
  border-top: 1px solid rgba(22, 35, 59, .15);
  summary {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    padding: 20px 0;
    cursor: pointer;
    list-style: none;
    font-size: 18px;
    font-weight: 600;
    &::-webkit-details-marker { display: none; }
  }
  p {
    padding-bottom: 24px;
    max-width: 38rem;
    font-size: 15px;
    line-height: 1.6;
    color: rgba(22, 35, 59, .75);
  }
  &[open] p { animation: abre .2s ease-out; }
}
.faq-icon {
  position: relative;
  flex: none;
  width: 14px;
  height: 14px;
  &::before, &::after {
    content: '';
    position: absolute;
    inset: 6px 0 auto;
    height: 2px;
    background: theme('colors.tinta');
    transition: transform .2s;
  }
  &::after { transform: rotate(90deg); }
  .faq[open] &::after { transform: rotate(0deg); }
}
@keyframes abre {
  from { opacity: 0; transform: translateY(-4px); }
}

.section-title {
  font-size: 36px;
  line-height: 1.05;
  font-weight: 800;
  letter-spacing: -0.03em;
  @media (min-width: 768px) { font-size: 48px; }
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 15px;
  line-height: 1.2;
  white-space: nowrap;
  transition: background-color .15s, transform .15s;
  &:active { transform: translateY(1px); }
  &:disabled { opacity: .6; cursor: progress; }
}
.btn-ink {
  background: theme('colors.tinta');
  color: theme('colors.papel');
  &:hover { background: theme('colors.folha'); }
}
.btn-broto {
  background: theme('colors.broto');
  color: theme('colors.tinta');
  padding: 14px 24px;
  font-size: 18px;
  &:hover { background: #8fe68f; }
}

.text-link {
  font-weight: 600;
  color: theme('colors.folha');
  text-decoration: underline;
  text-underline-offset: 4px;
  &:hover { color: theme('colors.tinta'); }
}
.text-link-light {
  text-decoration: underline;
  text-decoration-color: theme('colors.broto');
  text-underline-offset: 5px;
  &:hover { color: theme('colors.broto'); }
}

.field {
  display: block;
  width: 100%;
  padding: 12px 14px;
  border-radius: 8px;
  border: 2px solid theme('colors.tinta');
  background: theme('colors.papel');
  color: theme('colors.tinta');
  font-size: 18px;
  &::placeholder { color: rgba(22, 35, 59, .4); }
  &:focus { outline: none; box-shadow: 0 0 0 3px theme('colors.broto'); }
}

.chip {
  cursor: pointer;
  span {
    display: inline-block;
    padding: 8px 14px;
    border-radius: 999px;
    border: 2px solid rgba(22, 35, 59, .2);
    font-size: 15px;
    font-weight: 600;
    transition: border-color .15s, background-color .15s;
  }
  &:hover span { border-color: theme('colors.tinta'); }
  input:checked + span {
    background: theme('colors.tinta');
    border-color: theme('colors.tinta');
    color: theme('colors.papel');
  }
  input:focus-visible + span {
    outline: 3px solid theme('colors.folha');
    outline-offset: 2px;
  }
}

/* Esboço ao vivo */
.browser {
  background: theme('colors.nevoa');
  border-radius: 14px;
  padding: 0 10px 10px;
  box-shadow: 0 30px 60px -30px rgba(22, 35, 59, .45);
}
.browser-bar {
  display: flex;
  align-items: center;
  gap: 14px;
  height: 44px;
  .dots { display: flex; gap: 6px; }
  .dots i { width: 10px; height: 10px; border-radius: 50%; background: rgba(22, 35, 59, .2); }
  .url {
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    background: theme('colors.papel');
    border-radius: 6px;
    padding: 4px 10px;
    font-size: 13px;
    color: rgba(22, 35, 59, .7);
  }
}
.mock {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 390px;
  border-radius: 8px;
  overflow: hidden;
  font-size: 13px;
  @media (min-width: 640px) { height: 410px; }
}

/* Restaurante */
.m-restaurante { background: #1F3A2F; color: #F2EADB; }
.r-top {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  padding: 11px 20px;
  font-size: 12px;
  color: rgba(242, 234, 219, .7);
  border-bottom: 1px solid rgba(242, 234, 219, .15);
}
.r-open {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  color: #F2EADB;
  i { width: 7px; height: 7px; border-radius: 50%; background: #8FD694; }
}
.r-addr { display: none; @media (min-width: 480px) { display: inline; } }
.r-hero {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 16px 20px;
}
.r-name {
  font-family: 'Fraunces', Georgia, serif;
  font-style: italic;
  font-weight: 600;
  font-size: 30px;
  line-height: 1;
  letter-spacing: -0.01em;
  overflow-wrap: anywhere;
  @media (min-width: 640px) { font-size: 40px; }
}
.r-tag { margin-top: 10px; max-width: 26ch; font-size: 13px; line-height: 1.45; color: rgba(242, 234, 219, .8); }
.r-cta {
  display: inline-block;
  margin-top: 14px;
  padding: 7px 14px;
  border-radius: 999px;
  background: #E9B949;
  color: #1F3A2F;
  font-size: 12px;
  font-weight: 700;
}
.r-plate {
  flex: none;
  width: 104px;
  height: 104px;
  border-radius: 50%;
  background:
    radial-gradient(circle at 40% 38%, #F4D27A 0 8%, transparent 9%),
    radial-gradient(circle at 60% 46%, #F4D27A 0 6%, transparent 7%),
    radial-gradient(circle at 52% 62%, #7FB069 0 7%, transparent 8%),
    radial-gradient(circle at 36% 58%, #7FB069 0 4%, transparent 5%),
    radial-gradient(circle, #C9733A 0 31%, #F2EADB 32% 61%, #D9CCB4 62% 65%, #F2EADB 66%);
  box-shadow: 0 14px 28px -10px rgba(0, 0, 0, .55);
  @media (min-width: 640px) { width: 140px; height: 140px; }
}
.r-menu {
  margin: 0 20px 18px;
  padding: 12px 16px;
  border: 1px solid rgba(242, 234, 219, .25);
  border-radius: 6px;
  li {
    display: flex;
    align-items: baseline;
    gap: 8px;
    padding: 3px 0;
    font-size: 12.5px;
    i { flex: 1; border-bottom: 1px dotted rgba(242, 234, 219, .45); }
  }
}
.r-menu-title {
  margin-bottom: 6px;
  font-family: 'Fraunces', Georgia, serif;
  font-style: italic;
  font-size: 15px;
  color: #E9B949;
}

/* Estúdio */
.m-estudio { background: #F7EEF2; color: #3B2340; }
.e-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  padding: 16px 20px;
}
.e-name {
  font-size: 19px;
  font-weight: 800;
  letter-spacing: -0.045em;
  text-transform: lowercase;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.e-links {
  display: none;
  gap: 14px;
  font-size: 12px;
  color: rgba(59, 35, 64, .7);
  @media (min-width: 480px) { display: flex; }
}
.e-body {
  flex: 1;
  min-height: 0;
  display: grid;
  grid-template-columns: 36% 1fr;
  gap: 16px;
  padding: 0 20px 20px;
}
.e-arch {
  border-radius: 999px 999px 10px 10px;
  background:
    radial-gradient(circle at 50% 36%, #FBE3C9 0 15%, transparent 16%),
    radial-gradient(ellipse 90% 30% at 50% 100%, #5A2F60 0 60%, transparent 61%),
    linear-gradient(180deg, #F0C6D8 0%, #C88DB6 55%, #8A5590 100%);
}
.e-book {
  align-self: center;
  padding: 16px;
  border-radius: 14px;
  background: #fff;
  box-shadow: 0 14px 30px -18px rgba(59, 35, 64, .5);
}
.e-h { font-size: 16px; font-weight: 800; letter-spacing: -0.02em; }
.e-days {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 6px;
  margin-top: 12px;
  span {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 6px 0;
    border-radius: 10px;
    background: #F7EEF2;
    font-size: 14px;
    font-weight: 700;
  }
  small { font-size: 10px; font-weight: 600; opacity: .7; }
  .on { background: #3B2340; color: #fff; }
}
.e-slots {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 10px;
  span { padding: 4px 9px; border-radius: 999px; border: 1px solid rgba(59, 35, 64, .2); font-size: 11.5px; font-weight: 600; }
  .on { background: #F0C6D8; border-color: #F0C6D8; }
}
.e-cta {
  display: block;
  margin-top: 12px;
  padding: 9px;
  border-radius: 10px;
  background: #3B2340;
  color: #fff;
  text-align: center;
  font-size: 12.5px;
  font-weight: 700;
}

/* Consultoria */
.m-consultoria { background: #fff; color: #14213D; }
.c-top {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 13px 20px;
  border-bottom: 1px solid #E3E6EC;
}
.c-name {
  margin-right: auto;
  font-family: 'Instrument Serif', Georgia, serif;
  font-size: 21px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.c-links {
  display: none;
  gap: 14px;
  font-size: 12px;
  color: #5A6478;
  @media (min-width: 560px) { display: flex; }
}
.c-btn { flex: none; padding: 6px 12px; border: 1px solid #14213D; border-radius: 4px; font-size: 12px; font-weight: 600; }
.c-hero {
  flex: 1;
  display: grid;
  grid-template-columns: 1.15fr 1fr;
  gap: 18px;
  align-items: center;
  padding: 24px 20px 20px;
}
.c-h {
  font-family: 'Instrument Serif', Georgia, serif;
  font-size: 31px;
  line-height: 1;
  letter-spacing: -0.01em;
  @media (min-width: 640px) { font-size: 44px; }
}
.c-sub { margin-top: 12px; max-width: 30ch; font-size: 13px; line-height: 1.45; color: #5A6478; }
.c-chart {
  width: 100%;
  height: auto;
  .c-grid { stroke: #E3E6EC; stroke-width: 1; }
  .c-area { fill: rgba(42, 127, 117, .12); }
  .c-line { fill: none; stroke: #2A7F75; stroke-width: 2.5; stroke-linejoin: round; stroke-linecap: round; }
  circle { fill: #2A7F75; }
}
.c-steps {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-top: 1px solid #E3E6EC;
  li {
    padding: 14px 20px;
    border-left: 1px solid #E3E6EC;
    font-size: 12.5px;
    font-weight: 600;
    &:first-child { border-left: 0; }
  }
  span {
    display: block;
    margin-bottom: 2px;
    font-family: 'Instrument Serif', Georgia, serif;
    font-size: 21px;
    font-weight: 400;
    color: #2A7F75;
  }
}

/* Loja */
.m-loja { background: #fff; color: #1A1A1A; }
.l-strip { padding: 6px; background: #FF5A36; color: #fff; text-align: center; font-size: 11.5px; font-weight: 600; }
.l-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  padding: 12px 18px;
}
.l-name {
  font-family: 'Anton', Impact, sans-serif;
  font-size: 22px;
  line-height: 1.1;
  text-transform: uppercase;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.l-cart {
  flex: none;
  font-size: 12px;
  font-weight: 600;
  b {
    display: inline-grid;
    place-items: center;
    width: 18px;
    height: 18px;
    margin-left: 4px;
    border-radius: 50%;
    background: #1A1A1A;
    color: #fff;
    font-size: 10px;
  }
}
.l-banner {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin: 0 18px;
  padding: 16px 18px;
  border-radius: 10px;
  background: #FFE1E8;
  p {
    max-width: 7ch;
    font-family: 'Anton', Impact, sans-serif;
    font-size: 34px;
    line-height: .95;
    text-transform: uppercase;
    color: #E2335F;
  }
  span { font-size: 12px; font-weight: 700; text-decoration: underline; text-underline-offset: 3px; }
}
.l-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;
  padding: 14px 18px 16px;
}
.l-thumb {
  display: grid;
  place-items: center;
  aspect-ratio: 1;
  border-radius: 8px;
  i { position: relative; display: block; }
}
.t-vela {
  background: #E8E3FF;
  i { width: 28px; height: 36px; margin-top: 10px; border-radius: 4px; background: #fff; box-shadow: inset 0 -9px 0 #C9BEFF; }
  i::before {
    content: '';
    position: absolute;
    left: 50%;
    top: -13px;
    width: 8px;
    height: 11px;
    margin-left: -4px;
    border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
    background: #FFB020;
  }
}
.t-caneca {
  background: #D9F2E6;
  i { width: 30px; height: 32px; margin-right: 8px; border-radius: 3px 3px 9px 9px; background: #2F9E6E; }
  i::after {
    content: '';
    position: absolute;
    right: -11px;
    top: 7px;
    width: 12px;
    height: 15px;
    border: 4px solid #2F9E6E;
    border-left: 0;
    border-radius: 0 9px 9px 0;
  }
}
.t-bag {
  background: #FFF0C7;
  i { width: 34px; height: 34px; margin-top: 10px; border-radius: 3px; background: #E8A317; }
  i::before {
    content: '';
    position: absolute;
    left: 9px;
    top: -13px;
    width: 16px;
    height: 16px;
    border: 3px solid #E8A317;
    border-bottom: 0;
    border-radius: 10px 10px 0 0;
  }
}
.l-pname { display: block; margin-top: 6px; font-size: 12px; font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.l-price { font-size: 12px; color: #666; }

/* A troca de tipo monta o esboço peça por peça */
.mock > * { animation: monta .45s cubic-bezier(.2, .7, .2, 1) both; }
.mock > :nth-child(2) { animation-delay: .06s; }
.mock > :nth-child(3) { animation-delay: .12s; }
.mock > :nth-child(4) { animation-delay: .18s; }
@keyframes monta {
  from { opacity: 0; transform: translateY(8px); }
}

.shot {
  border-radius: 10px;
  overflow: hidden;
  background: theme('colors.papel');
  box-shadow: 0 24px 48px -28px rgba(22, 35, 59, .5);
  img { display: block; width: 100%; aspect-ratio: 16 / 10; object-fit: cover; object-position: left top; }
}

.tick {
  padding-left: 22px;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: .45em;
    width: 10px;
    height: 10px;
    border-radius: 2px;
    background: theme('colors.broto');
  }
}

.step-num {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 2px solid theme('colors.tinta');
  font-weight: 800;
  font-size: 18px;
  background: theme('colors.papel');
  position: relative;
  z-index: 1;
}
.steps .step:last-child .step-num {
  background: theme('colors.broto');
  border-color: theme('colors.broto');
}
.step { position: relative; }
@media (min-width: 768px) {
  .step:not(:last-child)::after {
    content: '';
    position: absolute;
    top: 21px;
    left: 44px;
    right: -32px;
    height: 2px;
    background: rgba(22, 35, 59, .15);
  }
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  label { display: block; font-size: 15px; font-weight: 600; margin-bottom: 8px; }
  .field { border-color: transparent; }
}
.form-error {
  padding: 12px 14px;
  border-radius: 8px;
  background: #FDE8E8;
  color: #8A1C1C;
  font-size: 15px;
}

@media (prefers-reduced-motion: reduce) {
  .mock > *, .faq[open] p { animation: none; }
  .btn, .chip span, .faq-icon::after { transition: none; }
}
</style>
