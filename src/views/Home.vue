<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import 'alpinejs'
import  emailjs  from '@emailjs/browser';
import { useToast } from '@/composables/Utils';

let teste = ref(false)
const open= () =>{
teste.value = !teste.value
console.log(teste.value);
}

let name = ref('')
let email = ref('')
let phone = ref('')
let message = ref('')
let sendEmail =(e)=>{
    e.preventDefault();
    if(name.value == '' || email.value == '' || message.value == ''){
        alert('Preencha todos os campos obrigatórios');
        return;
    }
    const templateParms = {
        from_name: name.value,
        email: email.value,
        phone: phone.value,
        message: message.value,
    }
    console.log('Enviando...', templateParms);
    // Substitua 'SEU_TEMPLATE_ID' e 'SUA_PUBLIC_KEY' pelos seus dados reais do EmailJS
    emailjs.send('service_qer71bv', 'template_kaicipi', templateParms, 'F8LPldd25yldNb-Wd')
    .then((response)=>{
        console.log("Email enviado", response.status, response.text);
        name.value= ''
        email.value= ''
        phone.value= ''
        message.value= ''
        useToast().success('Email enviado!', {
            timeout: 2500, 
            style: { fontSize: '16px',
                width: '250px',
                height: '50px'
             } 
        })
    },(err)=>{
        console.log('Erro', err);
        alert('Ocorreu um erro ao enviar o email. Tente novamente mais tarde.');
    })
}

</script>

<template>
  <main class="flex-col w-full  h-auto  ">
    <div class=" w-full  flex-col md:w-9/12  mx-auto">
      <!-- <header class=" hidden md:grid md:grid-cols-3 md:items-center md:border-b md:border-b-stone-950 md:py-2">

        <div class="col-span-1">
          <h4 class="text-left">titulo</h4>
        </div>

        <div class="col-span-1 flex justify-center">
          <ul class="flex flex-row space-x-4">
            <li>link One</li>
            <li>link two</li>
            <li>link three</li>
            <li>link four</li>
          </ul>
        </div>

        <div class="col-span-1 text-right">
          <button class="border bg-black text-stone-50 p-1 border-neutral-950 w-20">Button</button>
        </div>

      </header> -->
      <header class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/90 backdrop-blur-md shadow-sm py-4">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
            <div class="flex items-center justify-between">
                <!-- Logo -->
                <div class="flex items-center space-x-3 group cursor-pointer">
                    <div class="relative w-12 h-12 bg-gradient-to-br from-[#77dd77] to-[#5bc85b] rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all group-hover:scale-110">
                        <i class="fa-solid fa-bolt text-white text-2xl"></i>
                        <div class="absolute -top-1 -right-1 w-3 h-3 bg-[#77dd77] rounded-full animate-ping"></div>
                    </div>
                    <div>
                        <span class="text-2xl font-black tracking-tight"><span class="text-gray-900">TechFlow</span></span>
                        <div class="text-xs font-bold text-[#77dd77] -mt-1">Digital</div>
                    </div>
                </div>

                <!-- Desktop Nav -->
                <nav class="hidden md:flex items-center space-x-1">
                    <a href="#container-02" class="text-gray-700 hover:text-[#77dd77] transition-colors font-semibold cursor-pointer px-4 py-2 rounded-lg hover:bg-[#77dd77]/10">Sobre</a>
                    <a href="#container-03" class="text-gray-700 hover:text-[#77dd77] transition-colors font-semibold cursor-pointer px-4 py-2 rounded-lg hover:bg-[#77dd77]/10">Serviços</a>
                    <a href="#container-05" class="text-gray-700 hover:text-[#77dd77] transition-colors font-semibold cursor-pointer px-4 py-2 rounded-lg hover:bg-[#77dd77]/10">Projetos</a>
                    <a href="#vantagens" class="text-gray-700 hover:text-[#77dd77] transition-colors font-semibold cursor-pointer px-4 py-2 rounded-lg hover:bg-[#77dd77]/10">Vantagens</a>
                    <a href="#contato" class="ml-4 bg-gray-900 text-white px-6 py-2.5 rounded-xl hover:bg-[#77dd77] transition-all font-bold cursor-pointer whitespace-nowrap shadow-lg hover:shadow-xl hover:scale-105">Contato</a>
                </nav>

                <!-- Mobile Button -->
                <button @click="open" class="md:hidden w-11 h-11 flex items-center justify-center cursor-pointer bg-gray-900 rounded-xl hover:bg-[#77dd77] transition-colors">
                    <i class="fa-solid fa-bars text-2xl text-white"></i>
                </button>
            </div>
        </div>

        <!-- Mobile Menu -->
        <div class="bg-white/95 backdrop-blur-md border-t border-gray-100 md:hidden" :class="{'block': teste, 'hidden': !teste}">
            <ul class="flex flex-col p-4 space-y-2">
                <a class="block px-4 py-3 rounded-xl hover:bg-[#77dd77]/10 text-gray-700 font-semibold transition-colors" href="#container-02" @click="teste = false">Sobre nós</a>
                <a class="block px-4 py-3 rounded-xl hover:bg-[#77dd77]/10 text-gray-700 font-semibold transition-colors" href="#container-03" @click="teste = false">Serviços</a>
                <a class="block px-4 py-3 rounded-xl hover:bg-[#77dd77]/10 text-gray-700 font-semibold transition-colors" href="#container-05" @click="teste = false">Projetos</a>
                <a class="block px-4 py-3 rounded-xl hover:bg-[#77dd77]/10 text-gray-700 font-semibold transition-colors" href="#vantagens" @click="teste = false">Vantagens</a>
                <a class="block px-4 py-3 rounded-xl hover:bg-[#77dd77]/10 text-gray-700 font-semibold transition-colors" href="#contato" @click="teste = false">Contato</a>
            </ul>
        </div>
      </header>
    
    
    <div id="container-01" class="relative w-full overflow-hidden">
        <!-- Background Elements -->
        <div class="absolute inset-0 bg-gradient-to-br from-white via-[#77dd77]/5 to-white"></div>
        <div class="absolute top-20 right-10 w-72 h-72 bg-[#77dd77]/10 rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute bottom-20 left-10 w-96 h-96 bg-[#77dd77]/5 rounded-full blur-3xl"></div>
        <div class="absolute top-40 left-20 w-20 h-20 border-4 border-[#77dd77]/20 rotate-45 animate-spin" style="animation-duration: 20s;"></div>
        <div class="absolute bottom-40 right-32 w-16 h-16 bg-[#77dd77]/10 rounded-full"></div>
        <div class="absolute top-1/3 right-20 w-24 h-24 border-2 border-[#77dd77]/30 rounded-lg rotate-12"></div>

        <!-- Main Content -->
        <div class="relative max-w-7xl mx-auto px-6 lg:px-8 py-32">
            <div class="grid lg:grid-cols-2 gap-16 items-center">
                <div class="text-left">
                    <div class="inline-flex items-center space-x-2 bg-[#77dd77]/10 px-5 py-3 rounded-full mb-8 border border-[#77dd77]/20">
                        <div class="w-2 h-2 bg-[#77dd77] rounded-full animate-pulse"></div>
                        <span class="text-gray-700 text-sm font-semibold tracking-wide">Transformando ideias em realidade digital</span>
                    </div>
                    <h1 class="text-5xl md:text-7xl font-black text-gray-900 mb-6 leading-[1.1]">
                        Visibilidade<br>
                        <span class="relative inline-block">
                            <span class="text-[#77dd77]">digital</span>
                            <svg class="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 10C50 2 150 2 198 10" stroke="#77dd77" stroke-width="3" stroke-linecap="round"></path>
                            </svg>
                        </span>
                        para sua<br>marca <span class="text-[#77dd77]">decolar</span>
                    </h1>
                    <p class="text-xl text-gray-600 mb-10 leading-relaxed max-w-xl">
                        Transforme suas ideias em websites de sucesso. Conquiste seu espaço online com nossa experiência e criatividade.
                    </p>
                    <div class="flex flex-col sm:flex-row items-start gap-4 mb-12">
                        <button class="group bg-gray-900 text-white px-8 py-4 rounded-xl hover:bg-[#77dd77] transition-all duration-300 font-bold text-lg shadow-xl hover:shadow-2xl cursor-pointer whitespace-nowrap hover:scale-105">
                            Começar Agora
                            <i class="fa-solid fa-arrow-right ml-2 group-hover:translate-x-2 transition-transform inline-block"></i>
                        </button>
                        <button class="bg-white text-gray-900 px-8 py-4 rounded-xl border-2 border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 font-bold text-lg cursor-pointer whitespace-nowrap hover:scale-105">
                            Saiba mais
                        </button>
                    </div>
                    <div class="flex flex-row gap-8">
                        <div>
                            <div class="text-4xl font-black text-[#77dd77] mb-1">50+</div>
                            <div class="text-gray-600 text-sm font-medium">Projetos</div>
                        </div>
                        <div>
                            <div class="text-4xl font-black text-[#77dd77] mb-1">98%</div>
                            <div class="text-gray-600 text-sm font-medium">Satisfação</div>
                        </div>
                        <div>
                            <div class="text-4xl font-black text-[#77dd77] mb-1">5+</div>
                            <div class="text-gray-600 text-sm font-medium">Anos</div>
                        </div>
                    </div>
                </div>
                
                <!-- Floating Image Card -->
                <div class="relative hidden lg:block">
                    <div class="relative">
                        <div class="relative z-10 bg-white rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-500">
                            <div class="aspect-[4/3] bg-gradient-to-br from-[#77dd77]/20 to-[#77dd77]/5 rounded-2xl flex items-center justify-center overflow-hidden">
                                <img alt="Workspace" class="w-full h-full object-cover rounded-2xl" src="https://readdy.ai/api/search-image?query=Modern%20creative%20workspace%20with%20laptop%20showing%20beautiful%20website%20design%20interface%20clean%20minimalist%20desk%20setup%20with%20plants%20coffee%20cup%20and%20design%20tools%20professional%20photography%20bright%20natural%20lighting%20inspiring%20creative%20environment%20high%20quality&amp;width=600&amp;height=450&amp;seq=hero-main-001&amp;orientation=landscape">
                            </div>
                            <div class="absolute -top-6 -right-6 bg-[#77dd77] text-white px-6 py-4 rounded-2xl shadow-xl transform rotate-3 hover:rotate-6 transition-transform">
                                <div class="text-2xl font-black">100%</div>
                                <div class="text-xs font-semibold">Responsivo</div>
                            </div>
                            <div class="absolute -bottom-6 -left-6 bg-gray-900 text-white px-6 py-4 rounded-2xl shadow-xl transform -rotate-3 hover:-rotate-6 transition-transform">
                                <div class="flex items-center space-x-2">
                                    <i class="fa-solid fa-bolt text-[#77dd77] text-2xl"></i>
                                    <div>
                                        <div class="text-xs font-semibold">Performance</div>
                                        <div class="text-lg font-black">Ultra Rápido</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="absolute -top-8 left-1/4 w-16 h-16 bg-[#77dd77]/20 rounded-full animate-bounce" style="animation-duration: 3s;"></div>
                        <div class="absolute -bottom-8 right-1/4 w-12 h-12 border-4 border-[#77dd77]/30 rounded-lg rotate-45"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="container-02" class="relative py-24 overflow-hidden">
        <div class="absolute top-20 right-0 w-96 h-96 bg-[#77dd77]/5 rounded-full blur-3xl"></div>
        <div class="absolute bottom-20 left-0 w-96 h-96 bg-[#77dd77]/5 rounded-full blur-3xl"></div>
        
        <div class="max-w-7xl mx-auto px-6 lg:px-8 relative">
            <div class="grid lg:grid-cols-2 gap-16 items-center">
                <div class="relative order-2 lg:order-1">
                    <div class="relative">
                        <div class="relative z-10">
                            <div class="absolute -inset-4 bg-gradient-to-br from-[#77dd77]/20 to-transparent rounded-3xl transform rotate-3"></div>
                            <div class="relative bg-white rounded-3xl shadow-2xl p-4 transform -rotate-1 hover:rotate-0 transition-transform duration-500">
                                <img alt="TechFlow Team" class="w-full h-full object-cover rounded-2xl" src="https://readdy.ai/api/search-image?query=Modern%20creative%20tech%20team%20working%20together%20on%20innovative%20web%20projects%20in%20bright%20contemporary%20office%20space%20with%20laptops%20tablets%20and%20design%20tools%20collaborative%20workspace%20natural%20lighting%20professional%20photography%20diverse%20team%20members%20brainstorming%20ideas&amp;width=700&amp;height=500&amp;seq=about-team-001&amp;orientation=landscape">
                            </div>
                        </div>
                        <div class="absolute -bottom-8 -right-8 bg-[#77dd77] text-white px-8 py-6 rounded-2xl shadow-2xl transform rotate-3 hover:rotate-6 transition-transform z-20">
                            <div class="text-4xl font-black mb-1">5+</div>
                            <div class="text-sm font-bold">Anos de Experiência</div>
                        </div>
                        <div class="absolute -top-8 -left-8 bg-gray-900 text-white px-8 py-6 rounded-2xl shadow-2xl transform -rotate-3 hover:-rotate-6 transition-transform z-20">
                            <div class="flex items-center space-x-3">
                                <i class="fa-solid fa-star text-[#77dd77] text-3xl"></i>
                                <div>
                                    <div class="text-3xl font-black">98%</div>
                                    <div class="text-xs font-bold">Satisfação</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="order-1 lg:order-2">
                    <div class="inline-block bg-[#77dd77]/10 text-[#77dd77] px-5 py-2 rounded-full text-sm font-bold mb-6 border border-[#77dd77]/20">Sobre a TechFlow</div>
                    <h2 class="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">Transformando <span class="text-[#77dd77]">ideias</span> em realidade digital</h2>
                    <p class="text-lg text-gray-600 mb-8 leading-relaxed">A TechFlow Digital nasce com o objetivo de criar sites impactantes e funcionais, focados em multi page e portfólios. Valorizamos o comprometimento e a criatividade, atendendo empresas e microempreendedores que buscam uma presença online confiável e acessível.</p>
                    <p class="text-lg text-gray-600 mb-10 leading-relaxed">Inspirados pela cultura Tech, oferecemos soluções minimalistas e práticas, utilizando a mais alta tecnologia para garantir a satisfação e a recomendação espontânea dos nossos clientes.</p>
                    
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div class="flex items-center space-x-3 bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all group cursor-pointer border border-gray-100 hover:border-[#77dd77]/30">
                            <div class="w-12 h-12 bg-[#77dd77]/10 rounded-xl flex items-center justify-center group-hover:bg-[#77dd77] transition-colors">
                                <i class="fa-solid fa-rocket text-[#77dd77] group-hover:text-white text-xl transition-colors"></i>
                            </div>
                            <span class="text-gray-700 font-semibold text-sm">Sites impactantes e funcionais</span>
                        </div>
                        <div class="flex items-center space-x-3 bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all group cursor-pointer border border-gray-100 hover:border-[#77dd77]/30">
                            <div class="w-12 h-12 bg-[#77dd77]/10 rounded-xl flex items-center justify-center group-hover:bg-[#77dd77] transition-colors">
                                <i class="fa-solid fa-shield-halved text-[#77dd77] group-hover:text-white text-xl transition-colors"></i>
                            </div>
                            <span class="text-gray-700 font-semibold text-sm">Presença online confiável</span>
                        </div>
                        <div class="flex items-center space-x-3 bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all group cursor-pointer border border-gray-100 hover:border-[#77dd77]/30">
                            <div class="w-12 h-12 bg-[#77dd77]/10 rounded-xl flex items-center justify-center group-hover:bg-[#77dd77] transition-colors">
                                <i class="fa-solid fa-lightbulb text-[#77dd77] group-hover:text-white text-xl transition-colors"></i>
                            </div>
                            <span class="text-gray-700 font-semibold text-sm">Criatividade e inovação</span>
                        </div>
                        <div class="flex items-center space-x-3 bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all group cursor-pointer border border-gray-100 hover:border-[#77dd77]/30">
                            <div class="w-12 h-12 bg-[#77dd77]/10 rounded-xl flex items-center justify-center group-hover:bg-[#77dd77] transition-colors">
                                <i class="fa-solid fa-users text-[#77dd77] group-hover:text-white text-xl transition-colors"></i>
                            </div>
                            <span class="text-gray-700 font-semibold text-sm">Atendimento personalizado</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="container-03" class="relative py-24">
        <div class="absolute inset-0 opacity-5">
            <div class="absolute top-0 left-0 w-full h-full" style="background-image: radial-gradient(circle at 2px 2px, rgb(119, 221, 119) 1px, transparent 0px); background-size: 40px 40px;"></div>
        </div>
        <div class="max-w-7xl mx-auto px-6 lg:px-8 relative">
            <div class="text-center mb-20">
                <div class="max-w-80 inline-flex items-center space-x-2 bg-[#77dd77]/10 px-5 py-3 rounded-full mb-6 border border-[#77dd77]/20">
                    <i class="fa-solid fa-briefcase text-[#77dd77]"></i>
                    <span class="text-[#77dd77] text-sm font-bold tracking-wide">Nossos Serviços</span>
                </div>
                <h2 class="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">Soluções <span class="text-[#77dd77]">completas</span><br>para seu sucesso digital</h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">Oferecemos uma gama completa de serviços para transformar sua presença online</p>
            </div>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Service 01 -->
                <div class="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-[#77dd77]/30 cursor-pointer overflow-hidden">
                    <div class="absolute inset-0 bg-gradient-to-br from-[#77dd77]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div class="relative">
                        <div class="w-16 h-16 bg-gradient-to-br from-[#77dd77] to-[#5bc85b] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                            <i class="fa-solid fa-laptop-code text-white text-2xl"></i>
                        </div>
                        <h3 class="text-2xl font-black text-gray-900 mb-4 group-hover:text-[#77dd77] transition-colors">Design Responsivo</h3>
                        <p class="text-gray-600 leading-relaxed mb-6">Sites que se adaptam perfeitamente a qualquer dispositivo, garantindo uma experiência impecável.</p>
                        <div class="flex items-center text-[#77dd77] font-bold text-sm group-hover:translate-x-2 transition-transform">
                            Saiba mais<i class="fa-solid fa-arrow-right ml-2"></i>
                        </div>
                    </div>
                    <div class="absolute top-6 right-6 text-6xl font-black text-gray-100 group-hover:text-[#77dd77]/10 transition-colors">01</div>
                </div>

                <!-- Service 02 -->
                <div class="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-[#77dd77]/30 cursor-pointer overflow-hidden">
                    <div class="absolute inset-0 bg-gradient-to-br from-[#77dd77]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div class="relative">
                        <div class="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                            <i class="fa-solid fa-code text-white text-2xl"></i>
                        </div>
                        <h3 class="text-2xl font-black text-gray-900 mb-4 group-hover:text-[#77dd77] transition-colors">Desenvolvimento Web</h3>
                        <p class="text-gray-600 leading-relaxed mb-6">Código limpo e otimizado com as tecnologias mais modernas para garantir performance.</p>
                        <div class="flex items-center text-[#77dd77] font-bold text-sm group-hover:translate-x-2 transition-transform">
                            Saiba mais<i class="fa-solid fa-arrow-right ml-2"></i>
                        </div>
                    </div>
                    <div class="absolute top-6 right-6 text-6xl font-black text-gray-100 group-hover:text-[#77dd77]/10 transition-colors">02</div>
                </div>

                <!-- Service 03 -->
                <div class="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-[#77dd77]/30 cursor-pointer overflow-hidden">
                    <div class="absolute inset-0 bg-gradient-to-br from-[#77dd77]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div class="relative">
                        <div class="w-16 h-16 bg-gradient-to-br from-[#77dd77] to-[#5bc85b] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                            <i class="fa-solid fa-palette text-white text-2xl"></i>
                        </div>
                        <h3 class="text-2xl font-black text-gray-900 mb-4 group-hover:text-[#77dd77] transition-colors">UI/UX Design</h3>
                        <p class="text-gray-600 leading-relaxed mb-6">Interfaces intuitivas e atraentes que proporcionam navegação fluida e engajamento.</p>
                        <div class="flex items-center text-[#77dd77] font-bold text-sm group-hover:translate-x-2 transition-transform">
                            Saiba mais<i class="fa-solid fa-arrow-right ml-2"></i>
                        </div>
                    </div>
                    <div class="absolute top-6 right-6 text-6xl font-black text-gray-100 group-hover:text-[#77dd77]/10 transition-colors">03</div>
                </div>

                <!-- Service 04 -->
                <div class="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-[#77dd77]/30 cursor-pointer overflow-hidden">
                    <div class="absolute inset-0 bg-gradient-to-br from-[#77dd77]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div class="relative">
                        <div class="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                            <i class="fa-solid fa-magnifying-glass text-white text-2xl"></i>
                        </div>
                        <h3 class="text-2xl font-black text-gray-900 mb-4 group-hover:text-[#77dd77] transition-colors">SEO Otimizado</h3>
                        <p class="text-gray-600 leading-relaxed mb-6">Otimização completa para mecanismos de busca, aumentando sua visibilidade online.</p>
                        <div class="flex items-center text-[#77dd77] font-bold text-sm group-hover:translate-x-2 transition-transform">
                            Saiba mais<i class="fa-solid fa-arrow-right ml-2"></i>
                        </div>
                    </div>
                    <div class="absolute top-6 right-6 text-6xl font-black text-gray-100 group-hover:text-[#77dd77]/10 transition-colors">04</div>
                </div>

                <!-- Service 05 -->
                <div class="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-[#77dd77]/30 cursor-pointer overflow-hidden">
                    <div class="absolute inset-0 bg-gradient-to-br from-[#77dd77]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div class="relative">
                        <div class="w-16 h-16 bg-gradient-to-br from-[#77dd77] to-[#5bc85b] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                            <i class="fa-solid fa-cart-shopping text-white text-2xl"></i>
                        </div>
                        <h3 class="text-2xl font-black text-gray-900 mb-4 group-hover:text-[#77dd77] transition-colors">E-commerce</h3>
                        <p class="text-gray-600 leading-relaxed mb-6">Lojas virtuais completas e seguras, com integração de pagamentos e gestão eficiente.</p>
                        <div class="flex items-center text-[#77dd77] font-bold text-sm group-hover:translate-x-2 transition-transform">
                            Saiba mais<i class="fa-solid fa-arrow-right ml-2"></i>
                        </div>
                    </div>
                    <div class="absolute top-6 right-6 text-6xl font-black text-gray-100 group-hover:text-[#77dd77]/10 transition-colors">05</div>
                </div>

                <!-- Service 06 -->
                <div class="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-[#77dd77]/30 cursor-pointer overflow-hidden">
                    <div class="absolute inset-0 bg-gradient-to-br from-[#77dd77]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div class="relative">
                        <div class="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                            <i class="fa-solid fa-chart-line text-white text-2xl"></i>
                        </div>
                        <h3 class="text-2xl font-black text-gray-900 mb-4 group-hover:text-[#77dd77] transition-colors">Analytics</h3>
                        <p class="text-gray-600 leading-relaxed mb-6">Ferramentas de análise para acompanhar desempenho e tomar decisões baseadas em dados.</p>
                        <div class="flex items-center text-[#77dd77] font-bold text-sm group-hover:translate-x-2 transition-transform">
                            Saiba mais<i class="fa-solid fa-arrow-right ml-2"></i>
                        </div>
                    </div>
                    <div class="absolute top-6 right-6 text-6xl font-black text-gray-100 group-hover:text-[#77dd77]/10 transition-colors">06</div>
                </div>
            </div>
        </div>
    </div>
   
    <div id="container-05" class="relative py-24 overflow-hidden">
        <div class="absolute top-40 left-10 w-72 h-72 bg-[#77dd77]/5 rounded-full blur-3xl"></div>
        <div class="absolute bottom-40 right-10 w-72 h-72 bg-[#77dd77]/5 rounded-full blur-3xl"></div>
        <div class="max-w-7xl mx-auto px-6 lg:px-8 relative">
            <div class="text-center mb-20">
                <div class="inline-flex items-center space-x-2 bg-[#77dd77]/10 px-5 py-3 rounded-full mb-6 border border-[#77dd77]/20
                w-36">
                    <i class="fa-solid fa-folder-open text-[#77dd77]"></i>
                    <span class="text-[#77dd77] text-sm font-bold tracking-wide">Portfólio</span>
                </div>
                <h2 class="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">Trabalhos que nos<br><span class="text-[#77dd77]">orgulham</span></h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">Conheça alguns dos projetos desenvolvidos com dedicação e criatividade</p>
            </div>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Project 01 -->
                <div class="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border-2 border-gray-100 hover:border-[#77dd77]/30">
                    <div class="relative overflow-hidden aspect-[4/3]">
                        <img alt="E-commerce Fashion" class="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700" src="https://readdy.ai/api/search-image?query=Modern%20elegant%20fashion%20ecommerce%20website%20interface%20displayed%20on%20laptop%20screen%20showing%20clean%20minimalist%20design%20with%20product%20gallery%20shopping%20cart%20and%20checkout%20features%20professional%20photography%20soft%20lighting%20white%20background%20high%20quality%20web%20design&amp;width=800&amp;height=600&amp;seq=project-001&amp;orientation=landscape">
                        <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                        <div class="absolute top-4 left-4 bg-gradient-to-r from-[#77dd77] to-[#5bc85b] text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg">Loja Virtual</div>
                        <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div class="bg-white text-gray-900 px-6 py-3 rounded-full font-bold flex items-center space-x-2 shadow-xl transform scale-90 group-hover:scale-100 transition-transform">
                                <span>Ver Projeto</span>
                                <i class="fa-solid fa-arrow-up-right-from-square"></i>
                            </div>
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-black text-gray-900 mb-3 group-hover:text-[#77dd77] transition-colors">E-commerce Fashion</h3>
                        <div class="flex flex-wrap gap-2">
                            <span class="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-semibold hover:bg-[#77dd77]/10 hover:text-[#77dd77] transition-colors">E-commerce</span>
                            <span class="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-semibold hover:bg-[#77dd77]/10 hover:text-[#77dd77] transition-colors">Design</span>
                            <span class="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-semibold hover:bg-[#77dd77]/10 hover:text-[#77dd77] transition-colors">SEO</span>
                        </div>
                    </div>
                </div>

                <!-- Project 02 -->
                <div class="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border-2 border-gray-100 hover:border-[#77dd77]/30">
                    <div class="relative overflow-hidden aspect-[4/3]">
                        <img alt="Portfólio Criativo" class="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700" src="https://readdy.ai/api/search-image?query=Creative%20portfolio%20website%20mockup%20on%20desktop%20computer%20showcasing%20modern%20minimalist%20design%20with%20project%20galleries%20about%20section%20and%20contact%20form%20clean%20white%20interface%20professional%20workspace%20setting%20natural%20lighting%20high%20end%20web%20design&amp;width=800&amp;height=600&amp;seq=project-002&amp;orientation=landscape">
                        <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                        <div class="absolute top-4 left-4 bg-gradient-to-r from-gray-700 to-gray-900 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg">Portfólio</div>
                        <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div class="bg-white text-gray-900 px-6 py-3 rounded-full font-bold flex items-center space-x-2 shadow-xl transform scale-90 group-hover:scale-100 transition-transform w-auto">
                                <span>Ver Projeto</span>
                                <i class="fa-solid fa-arrow-up-right-from-square"></i>
                            </div>
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-black text-gray-900 mb-3 group-hover:text-[#77dd77] transition-colors">Portfólio Criativo</h3>
                        <div class="flex flex-wrap gap-">
                            <span class="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-semibold hover:bg-[#77dd77]/10 hover:text-[#77dd77] transition-colors">Portfólio</span>
                            <span class="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-semibold hover:bg-[#77dd77]/10 hover:text-[#77dd77] transition-colors">UI/UX</span>
                            <span class="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-semibold hover:bg-[#77dd77]/10 hover:text-[#77dd77] transition-colors">Responsivo</span>
                        </div>
                    </div>
                </div>

                <!-- Project 03 -->
                <div class="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border-2 border-gray-100 hover:border-[#77dd77]/30">
                    <div class="relative overflow-hidden aspect-[4/3]">
                        <img alt="Landing Page SaaS" class="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700" src="https://readdy.ai/api/search-image?query=Professional%20SaaS%20landing%20page%20website%20on%20laptop%20screen%20featuring%20clean%20modern%20design%20with%20hero%20section%20features%20pricing%20tables%20and%20call%20to%20action%20buttons%20minimalist%20white%20background%20soft%20shadows%20premium%20web%20design&amp;width=800&amp;height=600&amp;seq=project-003&amp;orientation=landscape">
                        <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                        <div class="absolute top-4 left-4 bg-gradient-to-r from-[#77dd77] to-[#5bc85b] text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg">Landing Page</div>
                        <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div class="bg-white text-gray-900 px-6 py-3 rounded-full font-bold flex items-center space-x-2 shadow-xl transform scale-90 group-hover:scale-100 transition-transform">
                                <span>Ver Projeto</span>
                                <i class="fa-solid fa-arrow-up-right-from-square"></i>
                            </div>
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-black text-gray-900 mb-3 group-hover:text-[#77dd77] transition-colors">Landing Page SaaS</h3>
                        <div class="flex flex-wrap gap-2">
                            <span class="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-semibold hover:bg-[#77dd77]/10 hover:text-[#77dd77] transition-colors">Landing Page</span>
                            <span class="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-semibold hover:bg-[#77dd77]/10 hover:text-[#77dd77] transition-colors">Conversão</span>
                            <span class="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-semibold hover:bg-[#77dd77]/10 hover:text-[#77dd77] transition-colors">Analytics</span>
                        </div>
                    </div>
                </div>

                <!-- Project 04 -->
                <div class="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border-2 border-gray-100 hover:border-[#77dd77]/30">
                    <div class="relative overflow-hidden aspect-[4/3]">
                        <img alt="Site Corporativo" class="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700" src="https://readdy.ai/api/search-image?query=Corporate%20business%20website%20displayed%20on%20desktop%20monitor%20showing%20professional%20clean%20design%20with%20company%20information%20services%20team%20section%20and%20contact%20details%20modern%20minimalist%20interface%20white%20background%20office%20environment%20high%20quality&amp;width=800&amp;height=600&amp;seq=project-004&amp;orientation=landscape">
                        <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                        <div class="absolute top-4 left-4 bg-gradient-to-r from-gray-700 to-gray-900 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg">Institucional</div>
                        <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div class="bg-white text-gray-900 px-6 py-3 rounded-full font-bold flex items-center space-x-2 shadow-xl transform scale-90 group-hover:scale-100 transition-transform">
                                <span>Ver Projeto</span>
                                <i class="fa-solid fa-arrow-up-right-from-square"></i>
                            </div>
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-black text-gray-900 mb-3 group-hover:text-[#77dd77] transition-colors">Site Corporativo</h3>
                        <div class="flex flex-wrap gap-2">
                            <span class="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-semibold hover:bg-[#77dd77]/10 hover:text-[#77dd77] transition-colors">Institucional</span>
                            <span class="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-semibold hover:bg-[#77dd77]/10 hover:text-[#77dd77] transition-colors">SEO</span>
                            <span class="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-semibold hover:bg-[#77dd77]/10 hover:text-[#77dd77] transition-colors">Responsivo</span>
                        </div>
                    </div>
                </div>

                <!-- Project 05 -->
                <div class="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border-2 border-gray-100 hover:border-[#77dd77]/30">
                    <div class="relative overflow-hidden aspect-[4/3]">
                        <img alt="Blog Profissional" class="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700" src="https://readdy.ai/api/search-image?query=Modern%20professional%20blog%20website%20interface%20on%20laptop%20showing%20clean%20article%20layout%20with%20featured%20posts%20categories%20sidebar%20and%20reading%20experience%20minimalist%20design%20white%20background%20natural%20lighting%20premium%20web%20design&amp;width=800&amp;height=600&amp;seq=project-005&amp;orientation=landscape">
                        <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                        <div class="absolute top-4 left-4 bg-gradient-to-r from-[#77dd77] to-[#5bc85b] text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg">Blog</div>
                        <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div class="bg-white text-gray-900 px-6 py-3 rounded-full font-bold flex items-center space-x-2 shadow-xl transform scale-90 group-hover:scale-100 transition-transform">
                                <span>Ver Projeto</span>
                                <i class="fa-solid fa-arrow-up-right-from-square"></i>
                            </div>
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-black text-gray-900 mb-3 group-hover:text-[#77dd77] transition-colors">Blog Profissional</h3>
                        <div class="flex flex-wrap gap-2">
                            <span class="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-semibold hover:bg-[#77dd77]/10 hover:text-[#77dd77] transition-colors">Blog</span>
                            <span class="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-semibold hover:bg-[#77dd77]/10 hover:text-[#77dd77] transition-colors">CMS</span>
                            <span class="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-semibold hover:bg-[#77dd77]/10 hover:text-[#77dd77] transition-colors">SEO</span>
                        </div>
                    </div>
                </div>

                <!-- Project 06 -->
                <div class="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border-2 border-gray-100 hover:border-[#77dd77]/30">
                    <div class="relative overflow-hidden aspect-[4/3]">
                        <img alt="App Web Dashboard" class="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700" src="https://readdy.ai/api/search-image?query=Clean%20modern%20web%20application%20dashboard%20interface%20on%20computer%20screen%20showing%20analytics%20charts%20data%20visualization%20user%20management%20and%20navigation%20menu%20professional%20minimalist%20design%20white%20background%20soft%20lighting%20high%20end%20UI&amp;width=800&amp;height=600&amp;seq=project-006&amp;orientation=landscape">
                        <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                        <div class="absolute top-4 left-4 bg-gradient-to-r from-gray-700 to-gray-900 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg">Web App</div>
                        <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div class="bg-white text-gray-900 px-6 py-3 rounded-full font-bold flex items-center space-x-2 shadow-xl transform scale-90 group-hover:scale-100 transition-transform">
                                <span>Ver Projeto</span>
                                <i class="fa-solid fa-arrow-up-right-from-square"></i>
                            </div>
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-black text-gray-900 mb-3 group-hover:text-[#77dd77] transition-colors">App Web Dashboard</h3>
                        <div class="flex flex-wrap gap-2">
                            <span class="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-semibold hover:bg-[#77dd77]/10 hover:text-[#77dd77] transition-colors">Web App</span>
                            <span class="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-semibold hover:bg-[#77dd77]/10 hover:text-[#77dd77] transition-colors">Dashboard</span>
                            <span class="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-semibold hover:bg-[#77dd77]/10 hover:text-[#77dd77] transition-colors">Analytics</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="text-center mt-16">
                <button class="group bg-gray-900 text-white px-8 py-4 rounded-xl hover:bg-[#77dd77] transition-all duration-300 font-bold text-lg shadow-xl hover:shadow-2xl cursor-pointer whitespace-nowrap hover:scale-105 inline-flex items-center space-x-2 w-auto">
                    <span>Ver Todos os Projetos</span>
                    <i class="fa-solid fa-arrow-right ml-2 group-hover:translate-x-2 transition-transform"></i>
                </button>
            </div>
        </div>
    </div>
   
   
  


    </div>
    
    <section id="vantagens" class="max-w-7xl mx-auto py-32 bg-white relative overflow-hidden">
        <div class="absolute inset-0 opacity-5">
            <div class="absolute top-0 left-0 w-full h-full" style="background-image: linear-gradient(45deg, rgb(119, 221, 119) 25%, transparent 25%), linear-gradient(-45deg, rgb(119, 221, 119) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, rgb(119, 221, 119) 75%), linear-gradient(-45deg, transparent 75%, rgb(119, 221, 119) 75%); background-size: 60px 60px; background-position: 0px 0px, 0px 30px, 30px -30px, -30px 0px;"></div>
        </div>
        <div class="max-w-7xl mx-auto px-6 lg:px-8 relative">
            <div class="text-center mb-20">
                <div class="inline-flex items-center space-x-2 bg-[#77dd77]/10 px-5 py-3 rounded-full mb-6 border border-[#77dd77]/20">
                    <i class="fa-solid fa-star text-[#77dd77]"></i>
                    <span class="text-[#77dd77] text-sm font-bold tracking-wide">Por que escolher a TechFlow</span>
                </div>
                <h2 class="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">Vantagens que fazem<br>a <span class="text-[#77dd77]">diferença</span></h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">Trabalhamos com dedicação para oferecer o melhor serviço e garantir sua satisfação total</p>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                <!-- Feature 01 -->
                <div class="group relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-[#77dd77]/30 cursor-pointer overflow-hidden">
                    <div class="absolute inset-0 bg-gradient-to-br from-[#77dd77]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div class="relative">
                        <div class="w-16 h-16 bg-gradient-to-br from-[#77dd77] to-[#5bc85b] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                            <i class="fa-solid fa-rocket text-white text-2xl"></i>
                        </div>
                        <h3 class="text-xl font-black text-gray-900 mb-3 group-hover:text-[#77dd77] transition-colors">Entrega Rápida</h3>
                        <p class="text-gray-600 leading-relaxed">Projetos entregues no prazo combinado, sem comprometer a qualidade e atenção aos detalhes.</p>
                    </div>
                    <div class="absolute bottom-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity">
                        <i class="fa-solid fa-rocket text-8xl text-[#77dd77]"></i>
                    </div>
                </div>

                <!-- Feature 02 -->
                <div class="group relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-[#77dd77]/30 cursor-pointer overflow-hidden">
                    <div class="absolute inset-0 bg-gradient-to-br from-[#77dd77]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div class="relative">
                        <div class="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                            <i class="fa-solid fa-shield-halved text-white text-2xl"></i>
                        </div>
                        <h3 class="text-xl font-black text-gray-900 mb-3 group-hover:text-[#77dd77] transition-colors">Segurança Garantida</h3>
                        <p class="text-gray-600 leading-relaxed">Implementamos as melhores práticas de segurança para proteger seu site e dados.</p>
                    </div>
                    <div class="absolute bottom-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity">
                        <i class="fa-solid fa-shield-halved text-8xl text-[#77dd77]"></i>
                    </div>
                </div>

                <!-- Feature 03 -->
                <div class="group relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-[#77dd77]/30 cursor-pointer overflow-hidden">
                    <div class="absolute inset-0 bg-gradient-to-br from-[#77dd77]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div class="relative">
                        <div class="w-16 h-16 bg-gradient-to-br from-[#77dd77] to-[#5bc85b] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                            <i class="fa-solid fa-headset text-white text-2xl"></i>
                        </div>
                        <h3 class="text-xl font-black text-gray-900 mb-3 group-hover:text-[#77dd77] transition-colors">Suporte Dedicado</h3>
                        <p class="text-gray-600 leading-relaxed">Equipe sempre disponível para tirar dúvidas e resolver qualquer problema rapidamente.</p>
                    </div>
                    <div class="absolute bottom-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity">
                        <i class="fa-solid fa-headset text-8xl text-[#77dd77]"></i>
                    </div>
                </div>

                <!-- Feature 04 -->
                <div class="group relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-[#77dd77]/30 cursor-pointer overflow-hidden">
                    <div class="absolute inset-0 bg-gradient-to-br from-[#77dd77]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div class="relative">
                        <div class="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                            <i class="fa-solid fa-tags text-white text-2xl"></i>
                        </div>
                        <h3 class="text-xl font-black text-gray-900 mb-3 group-hover:text-[#77dd77] transition-colors">Preço Justo</h3>
                        <p class="text-gray-600 leading-relaxed">Soluções acessíveis e transparentes, sem custos ocultos ou surpresas desagradáveis.</p>
                    </div>
                    <div class="absolute bottom-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity">
                        <i class="fa-solid fa-tags text-8xl text-[#77dd77]"></i>
                    </div>
                </div>

                <!-- Feature 05 -->
                <div class="group relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-[#77dd77]/30 cursor-pointer overflow-hidden">
                    <div class="absolute inset-0 bg-gradient-to-br from-[#77dd77]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div class="relative">
                        <div class="w-16 h-16 bg-gradient-to-br from-[#77dd77] to-[#5bc85b] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                            <i class="fa-solid fa-mobile-screen text-white text-2xl"></i>
                        </div>
                        <h3 class="text-xl font-black text-gray-900 mb-3 group-hover:text-[#77dd77] transition-colors">100% Responsivo</h3>
                        <p class="text-gray-600 leading-relaxed">Sites que funcionam perfeitamente em todos os dispositivos e tamanhos de tela.</p>
                    </div>
                    <div class="absolute bottom-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity">
                        <i class="fa-solid fa-mobile-screen text-8xl text-[#77dd77]"></i>
                    </div>
                </div>

                <!-- Feature 06 -->
                <div class="group relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-[#77dd77]/30 cursor-pointer overflow-hidden">
                    <div class="absolute inset-0 bg-gradient-to-br from-[#77dd77]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div class="relative">
                        <div class="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                            <i class="fa-solid fa-arrows-rotate text-white text-2xl"></i>
                        </div>
                        <h3 class="text-xl font-black text-gray-900 mb-3 group-hover:text-[#77dd77] transition-colors">Manutenção Contínua</h3>
                        <p class="text-gray-600 leading-relaxed">Atualizações regulares e manutenção preventiva para manter seu site sempre atualizado.</p>
                    </div>
                    <div class="absolute bottom-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity">
                        <i class="fa-solid fa-arrows-rotate text-8xl text-[#77dd77]"></i>
                    </div>
                </div>
            </div>

            <div class="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 overflow-hidden shadow-2xl">
                <div class="absolute top-0 right-0 w-96 h-96 bg-[#77dd77]/10 rounded-full blur-3xl"></div>
                <div class="absolute bottom-0 left-0 w-96 h-96 bg-[#77dd77]/10 rounded-full blur-3xl"></div>
                <div class="relative max-w-3xl mx-auto text-center">
                    <div class="w-48 inline-block bg-[#77dd77]/20 text-[#77dd77] px-5 py-2 rounded-full text-sm font-bold mb-6 border border-[#77dd77]/30">Vamos começar?</div>
                    <h3 class="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">Pronto para transformar sua<br><span class="text-[#77dd77]">presença digital?</span></h3>
                    <p class="text-xl mb-10 text-gray-300 leading-relaxed">Entre em contato conosco e descubra como podemos ajudar seu negócio a crescer online</p>
                    <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button class="group bg-[#77dd77] text-white px-8 py-4 rounded-xl hover:bg-[#5bc85b] transition-all font-bold text-lg shadow-xl cursor-pointer whitespace-nowrap hover:scale-105 flex items-center space-x-2">
                            <span>Fale Conosco</span>
                            <i class="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                        </button>
                        <a href="https://wa.me/5511982139034" target="_blank" rel="noopener noreferrer" class="bg-white text-gray-900 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all font-bold text-lg shadow-xl cursor-pointer whitespace-nowrap hover:scale-105 flex items-center space-x-2">
                            <i class="fa-brands fa-whatsapp text-xl text-[#77dd77]"></i>
                            <span>WhatsApp</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="contato" class="py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div class="absolute top-20 left-0 w-96 h-96 bg-[#77dd77]/5 rounded-full blur-3xl"></div>
        <div class="absolute bottom-20 right-0 w-96 h-96 bg-[#77dd77]/5 rounded-full blur-3xl"></div>
        <div class="max-w-7xl mx-auto px-6 lg:px-8 relative">
            <div class="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <div class="inline-block bg-[#77dd77]/10 text-[#77dd77] px-5 py-2 rounded-full text-sm font-bold mb-6 border border-[#77dd77]/20">Entre em Contato</div>
                    <h2 class="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">Vamos criar algo<br><span class="text-[#77dd77]">incrível juntos</span></h2>
                    <p class="text-xl text-gray-600 mb-10 leading-relaxed">Estamos prontos para transformar suas ideias em realidade. Entre em contato e vamos conversar sobre seu projeto!</p>
                    
                    <div class="space-y-4 mb-10">
                        <div class="flex items-center space-x-4 bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all group cursor-pointer border border-gray-100 hover:border-[#77dd77]/30">
                            <div class="w-14 h-14 bg-[#77dd77]/10 rounded-xl flex items-center justify-center group-hover:bg-[#77dd77] transition-colors">
                                <i class="fa-solid fa-envelope text-[#77dd77] group-hover:text-white text-2xl transition-colors"></i>
                            </div>
                            <div>
                                <div class="text-sm text-gray-500 font-semibold mb-1">Email</div>
                                <a href="mailto:techflowdigitallmtd@gmail.com" class="text-gray-900 font-bold hover:text-[#77dd77] transition-colors">techflowdigitallmtd@gmail.com</a>
                            </div>

                        </div>

                        <div class="flex items-center space-x-4 bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all group cursor-pointer border border-gray-100 hover:border-[#77dd77]/30">
                            <div class="w-14 h-14 bg-[#77dd77]/10 rounded-xl flex items-center justify-center group-hover:bg-[#77dd77] transition-colors">
                                <i class="fa-solid fa-phone text-[#77dd77] group-hover:text-white text-2xl transition-colors"></i>
                            </div>
                            <div>
                                <div class="text-sm text-gray-500 font-semibold mb-1">Telefone</div>
                                <a href="tel:+5511982139034" class="text-gray-900 font-bold hover:text-[#77dd77] transition-colors">+55 (11) 98213-9034</a>
                            </div>
                        </div>

                        <div class="flex items-center space-x-4 bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all group cursor-pointer border border-gray-100 hover:border-[#77dd77]/30">
                            <div class="w-14 h-14 bg-[#77dd77]/10 rounded-xl flex items-center justify-center group-hover:bg-[#77dd77] transition-colors">
                                <i class="fa-brands fa-whatsapp text-[#77dd77] group-hover:text-white text-2xl transition-colors"></i>
                            </div>
                            <div>
                                <div class="text-sm text-gray-500 font-semibold mb-1">WhatsApp</div>
                                <a href="https://wa.me/5511982139034" target="_blank" rel="noopener noreferrer" class="text-gray-900 font-bold hover:text-[#77dd77] transition-colors">Iniciar conversa</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="relative">
                    <div class="bg-white rounded-3xl shadow-2xl p-8 md:p-10 border-2 border-gray-100">
                        <form id="contact-form" @submit="sendEmail" class="space-y-6">
                            <div>
                                <label for="name" class="block text-sm font-bold text-gray-700 mb-2">Nome Completo *</label>
                                <input id="name" v-model="name" required="" class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#77dd77] focus:outline-none transition-colors text-gray-900 font-medium" placeholder="Seu nome" type="text" name="name">
                            </div>
                            <div>
                                <label for="email" class="block text-sm font-bold text-gray-700 mb-2">Email *</label>
                                <input id="email" v-model="email" required="" class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#77dd77] focus:outline-none transition-colors text-gray-900 font-medium" placeholder="seu@email.com" type="email" name="email">
                            </div>
                            <div>
                                <label for="phone" class="block text-sm font-bold text-gray-700 mb-2">Telefone</label>
                                <input id="phone" v-model="phone" class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#77dd77] focus:outline-none transition-colors text-gray-900 font-medium" placeholder="(11) 98213-9034" type="tel" name="phone">
                            </div>
                            <div>
                                <label for="message" class="block text-sm font-bold text-gray-700 mb-2">Mensagem * (0/500)</label>
                                <textarea id="message" v-model="message" name="message" required="" maxlength="500" rows="4" class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#77dd77] focus:outline-none transition-colors resize-none text-gray-900 font-medium" placeholder="Conte-nos sobre seu projeto..."></textarea>
                            </div>
                            <button type="submit" class="w-full bg-gray-900 text-white px-8 py-4 rounded-xl hover:bg-[#77dd77] transition-all font-bold text-lg shadow-xl hover:shadow-2xl cursor-pointer whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 flex items-center justify-center space-x-2">
                                <span>Enviar Mensagem</span>
                                <i class="fa-solid fa-paper-plane"></i>
                            </button>
                        </form>
                    </div>
                    <div class="absolute -bottom-6 -right-6 w-32 h-32 bg-[#77dd77]/20 rounded-full blur-2xl -z-10"></div>
                    <div class="absolute -top-6 -left-6 w-32 h-32 bg-[#77dd77]/20 rounded-full blur-2xl -z-10"></div>
                </div>
            </div>
        </div>
    </section>

    <footer class="bg-gray-900 text-white pt-20 pb-8 relative overflow-hidden">
        <div class="absolute top-0 right-0 w-96 h-96 bg-[#77dd77]/5 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-[#77dd77]/5 rounded-full blur-3xl"></div>
        <div class="max-w-7xl mx-auto px-6 lg:px-8 relative">
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                <!-- Brand -->
                <div class="lg:col-span-1">
                    <div class="flex items-center space-x-3 mb-6">
                        <div class="w-12 h-12 bg-gradient-to-br from-[#77dd77] to-[#5bc85b] rounded-xl flex items-center justify-center shadow-lg">
                            <i class="fa-solid fa-bolt text-white text-2xl"></i>
                        </div>
                        <div>
                            <span class="text-2xl font-black">TechFlow</span>
                            <div class="text-sm font-bold text-[#77dd77] -mt-1">Digital</div>
                        </div>
                    </div>
                    <p class="text-gray-400 leading-relaxed mb-6">Transformando ideias em realidade digital com criatividade e tecnologia de ponta.</p>
                    <div class="flex space-x-3">
                        <a href="#" class="w-10 h-10 bg-gray-800 hover:bg-[#77dd77] rounded-lg flex items-center justify-center transition-colors cursor-pointer group">
                            <i class="fa-brands fa-facebook-f text-lg group-hover:text-white transition-colors"></i>
                        </a>
                        <a href="#" class="w-10 h-10 bg-gray-800 hover:bg-[#77dd77] rounded-lg flex items-center justify-center transition-colors cursor-pointer group">
                            <i class="fa-brands fa-instagram text-lg group-hover:text-white transition-colors"></i>
                        </a>
                        <a href="#" class="w-10 h-10 bg-gray-800 hover:bg-[#77dd77] rounded-lg flex items-center justify-center transition-colors cursor-pointer group">
                            <i class="fa-brands fa-linkedin-in text-lg group-hover:text-white transition-colors"></i>
                        </a>
                        <a href="#" class="w-10 h-10 bg-gray-800 hover:bg-[#77dd77] rounded-lg flex items-center justify-center transition-colors cursor-pointer group">
                            <i class="fa-brands fa-x-twitter text-lg group-hover:text-white transition-colors"></i>
                        </a>
                    </div>
                </div>

                <!-- Quick Links -->
                <div>
                    <h4 class="text-lg font-black mb-6 text-[#77dd77]">Links Rápidos</h4>
                    <ul class="space-y-3">
                        <li><button class="text-gray-400 hover:text-[#77dd77] transition-colors cursor-pointer text-left">Sobre Nós</button></li>
                        <li><button class="text-gray-400 hover:text-[#77dd77] transition-colors cursor-pointer text-left">Serviços</button></li>
                        <li><button class="text-gray-400 hover:text-[#77dd77] transition-colors cursor-pointer text-left">Projetos</button></li>
                        <li><button class="text-gray-400 hover:text-[#77dd77] transition-colors cursor-pointer text-left">Vantagens</button></li>
                    </ul>
                </div>

                <!-- Services -->
                <div>
                    <h4 class="text-lg font-black mb-6 text-[#77dd77]">Serviços</h4>
                    <ul class="space-y-3">
                        <li class="text-gray-400 hover:text-[#77dd77] transition-colors cursor-pointer">Design Responsivo</li>
                        <li class="text-gray-400 hover:text-[#77dd77] transition-colors cursor-pointer">Desenvolvimento Web</li>
                        <li class="text-gray-400 hover:text-[#77dd77] transition-colors cursor-pointer">UI/UX Design</li>
                        <li class="text-gray-400 hover:text-[#77dd77] transition-colors cursor-pointer">SEO Otimizado</li>
                    </ul>
                </div>

                <!-- Contact -->
                <div>
                    <h4 class="text-lg font-black mb-6 text-[#77dd77]">Contato</h4>
                    <ul class="space-y-4">
                        <li class="flex items-start space-x-3">
                            <i class="fa-solid fa-envelope text-[#77dd77] text-xl mt-1"></i>
                            <div>
                                <div class="text-sm text-gray-500 mb-1">Email</div>
                                <a href="mailto:techflowdigitallmtd@gmail.com" class="text-gray-300 hover:text-[#77dd77] transition-colors">techflowdigitallmtd@gmail.com</a>
                            </div>
                        </li>
                        <li class="flex items-start space-x-3">
                            <i class="fa-solid fa-phone text-[#77dd77] text-xl mt-1"></i>
                            <div>
                                <div class="text-sm text-gray-500 mb-1">Telefone</div>
                                <a href="tel:+5511982139034" class="text-gray-300 hover:text-[#77dd77] transition-colors">+55 (11) 98213-9034</a>
                            </div>
                        </li>
                        <li class="flex items-start space-x-3">
                            <i class="fa-solid fa-location-dot text-[#77dd77] text-xl mt-1"></i>
                            <div>
                                <div class="text-sm text-gray-500 mb-1">Localização</div>
                                <span class="text-gray-300">São Paulo, Brasil</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="border-t border-gray-800 pt-8">
                <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <p class="text-gray-500 text-sm">© 2024 TechFlow Digital. Todos os direitos reservados.</p>
                    <div class="flex items-center space-x-6">
                        <a href="#" class="text-gray-500 hover:text-[#77dd77] transition-colors text-sm cursor-pointer">Política de Privacidade</a>
                        <a href="#" class="text-gray-500 hover:text-[#77dd77] transition-colors text-sm cursor-pointer">Termos de Uso</a>
                        <a href="https://readdy.ai/?origin=logo" target="_blank" rel="noopener noreferrer" class="text-gray-500 hover:text-[#77dd77] transition-colors text-sm cursor-pointer">Powered by Readdy</a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  </main>
</template>

<style lang="scss">
.container-imagem {
  width: 100%;
  height: 65vh; // Altura do container, ajuste conforme necessário
  display: flex; // Para que o item filho (img) preencha o container
  //justify-content: center; // Centraliza horizontalmente se necessário
  //align-items: center; // Centraliza verticalmente se necessário

  img {
    width: 90%;
    height: 100%;
    object-fit: cover; // Faz a imagem cobrir todo o container
  }
}

.timeline {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  .item {
    display: flex;
    align-items: start;
    margin-bottom: 90px;
    position: relative;

    &:not(:last-child)::after {
      content: '';
      position: absolute;
      left: 2%;
      top: 35px;
      bottom: -30px;
      width: 2px;
      height: 80px;
      background-color: #77DD77;
    }

    .circle {
      width: 20px;
      height: 20px;
      margin-right: 10px;
    }

    p {
      margin: 0;
    }
  }
}
@media (max-width: 500px) {
  .container-imagem {

  
    img {
      width: 100%;
     
    }
  }

  .timeline {
    width: 95%;
    margin: auto;
 
  
    .item {
   
  
      &:not(:last-child)::after {
        
      }
  
      .circle {
     
      }
  
      p {
        margin: 0;
      }
    }
  }
}

</style>