<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import 'alpinejs'
let teste = ref(false)
const open= () =>{
teste.value = !teste.value
console.log(teste.value);
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
      <header class="md:grid md:grid-cols-3 md:items-center md:border-b md:border-b-stone-950 md:py-2">
        <!-- Mobile Header -->
        <div class="md:hidden flex justify-between items-center p-2 border-b border-b-stone-950">
          <h4 class="text-left"><a class="text-2xl bold" href="container-01">TechFlow <span style="color: #77dd77;">Digital</span>.</a></h4>

          <button @click="open" class="border bg-black text-stone-50 p-1 w-1/3 border-neutral-950">Menu</button>
        </div>
    
        <!-- Mobile Menu -->

        <div :class="{'md:hidden p-2 border-b border-b-stone-950 transition-all duration-300': teste === true, 'hidden transition-all duration-300': teste === false}">
          <ul :class="{'flex flex-col space-y-2 transition-all duration-300': teste === true,  'hidden transition-all duration-300': teste === false}">
            <a class=" h-14" href="#container-02">Sobre nós</a>
            <a class=" h-14" href="#container-03">Serviços</a>
            <a class=" h-14" href="#container-05">Projetos</a>
            <a class=" h-14" href="#container-04">Vantagem</a>
            <a class=" h-14" href="#container-08">Contate-nos</a>
          </ul>
        </div>
       
    
        <!-- Desktop Header -->
        <div class="hidden md:block col-span-1">
          <h4 class="text-left"><a class="text-2xl bold" href="container-01">TechFlow <span style="color: #77dd77;">Digital</span>.</a></h4>
        </div>
    
        <div class="hidden md:flex col-span-1 justify-center">
          <ul class="flex flex-row space-x-4">
            <a href="#container-02">Sobre nós</a>
            <a href="#container-03">Serviços</a>
            <a href="#container-05">Projetos</a>
            <a href="#container-04">Vantagem</a>
          </ul>
        </div>
    
        <div class="hidden md:block col-span-1 text-right">
          <button class="border bg-black text-stone-50 p-1 border-neutral-950 w-28"><a href="#container-08">Contate-nos</a></button>
        </div>
      </header>
    
    
      <div id="container-01" class="w-full   h-auto flex flex-col items-center justify-center py-20  my-28">
        <div class="w-11/12  md:w-1/2  text-center mb-6">
          <h2 class="text-4xl md:text-5xl font-bold mb-10">Visibilidade digital para sua marca decolar</h2>
          <p class=""> Transforme Suas Ideias em Websites de Sucesso - Conquiste Seu Espaço Online com Nossa Experiência
            e
            Criatividade</p>
        </div>
        <div class="w-5/12 flex flex-col space-y-1 md:space-y-0 md:space-x-1 md:flex-row items-center md:justify-around border md:w-2/12">
          <button class="w-full border bg-black text-stone-50 py-1 border-neutral-950">Contato</button>
          <button class="w-full border bg-lime-500 text-black py-1 border-neutral-950">Saiba mais</button>
      </div>
      
      
    </div>
    <div id="container-02" class="w-full h-auto flex flex-col md:flex-row justify-center  mt-40 ">
      <div class="mt-20 md:me-10 md:w-11/12">
        <h2 class="overflow-hidden	w-11/12  h-auto text-5xl text-left font-bold mb-10 mx-auto md:ml-2">Sobre a TechFlow</h2>
        <p class="md:ml-2  w-11/12 mx-auto"> A TechFlow Digital nasce com o objetivo de criar sites impactantes e funcionais, focados em
          multi page e
          portfólios. Valorizamos o comprometimento e a criatividade, atendendo empresas e microempreendedores que
          buscam uma presença online confiável e acessível. Inspirados pela cultura Tech, oferecemos soluções
          minimalistas e práticas, utilizando a mais alta tecnologia para garantir a satisfação e a recomendação
          espontânea dos nossos clientes. Nossa identidade visual reflete a sofisticação e a profissionalidade, com
          cores suaves e um design clean.</p>
        <ul class="flex flex-col my-10 text-left ">
          <li class="flex align-middle mt-5"><i class="fa-solid fa-cube w-10 my-auto" style="color: #77dd77;"></i>
            <p class="ml-5"> Sites impactantes e funcionais</p>
          </li>
          <li class="flex align-middle mt-5"><i class="fa-solid fa-cube w-10 my-auto" style="color: #77dd77;"></i>
            <p class="ml-5"> Presença online confiável</p>
          </li>
          <li class="flex align-middle mt-5"><i class="fa-solid fa-cube w-10 my-auto" style="color: #77dd77;"></i>
            <p class="ml-5"> Soluções minimalistas e práticas</p>
          </li>
        </ul>
      </div>
      <div class="w-full md:w-11/12">
        <img class="" src="../assets/img/vi.png" alt="">
      </div>
    </div>
    <div id="container-03" class="w-full h-auto flex flex-col md:flex-row md:justify-between my-28 md:mb-64 ">
      <div class="text-left md:w-80 w-11/12  mx-auto my-5 ">
        <i class="fa-solid fa-cube fa-2xl w-10 text-left" style="color: #77dd77;"></i>
        <h3 class="my-7 text-xl font-bold">Desenvolvimento de Sites</h3>
        <p>Criação de sites personalizados, focados em single page e portfólios, utilizando tecnologias modernas para
          garantir desempenho e responsividade.</p>

      </div>
      <div class="text-left md:w-80 w-11/12  mx-auto my-5  ">
        <i class="fa-solid fa-cube fa-2xl w-10 text-left" style="color: #77dd77;"></i>
        <h3 class="my-7 text-xl font-bold">Design Gráfico e Identidade Visual</h3>
        <p>Desenvolvimento de identidade visual, incluindo logotipos, paleta de cores, tipografia e elementos gráficos
          para garantir uma aparência coesa e profissional.</p>

      </div>
      <div class="text-left md:w-80 w-11/12  mx-auto my-5 ">
        <i class="fa-solid fa-cube fa-2xl w-10 text-left" style="color: #77dd77;"></i>
        <h3 class="my-7 text-xl font-bold">Otimização para Motores de Busca (SEO)</h3>
        <p>Implementação de práticas de SEO para melhorar a visibilidade do site nos resultados de busca, aumentando o
          tráfego orgânico e a presença online.</p>

      </div>
    </div>
    <div id="container-04" class="w-full h-auto flex flex-col md:flex-row justify-center  my-32 md:mt-40">  
      <div class="container-imagem">
        <img class="h-full w-1/2 object-cover" src="../assets/img/desk-593327_1280.jpg" alt="">
      </div>
      <div class="ml-2 w-11/12 ">
        <h2 class="text-5xl font-bold mb-10 ">Vantagens de uma Empresa com Visibilidade na Web</h2>
        <p class="ml-2">
          Empresas com uma forte presença na web têm uma vantagem competitiva significativa no mercado atual. Ao estabelecer uma presença online robusta, você expande seu alcance globalmente, alcançando novos mercados e atraindo clientes potenciais de todo o mundo. Além disso, uma presença digital bem desenvolvida aumenta a credibilidade da sua marca, construindo confiança entre os consumidores e posicionando sua empresa como líder no setor. Com ferramentas avançadas de marketing digital, como SEO e campanhas nas redes sociais, você pode alcançar seu público-alvo de maneira mais eficaz, gerando leads qualificados e aumentando as taxas de conversão. A análise de dados proporciona insights valiosos sobre o comportamento do cliente, permitindo ajustes estratégicos que impulsionam o crescimento contínuo e a inovação dentro da empresa.
        </p>
        <ul class="flex flex-col text-left ">
          <li class="flex align-middle mt-5">
            <i class="fa-solid fa-cube w-10 my-auto" style="color: #77dd77;"></i>
            <p class="ml-5">Sites impactantes e funcionais</p>
          </li>
          <li class="flex align-middle mt-5">
            <i class="fa-solid fa-cube w-10 my-auto" style="color: #77dd77;"></i>
            <p class="ml-5">Presença online confiável</p>
          </li>
          <li class="flex align-middle mt-5">
            <i class="fa-solid fa-cube w-10 my-auto" style="color: #77dd77;"></i>
            <p class="ml-5">Soluções minimalistas e práticas</p>
          </li>
        </ul>
      </div>
    </div>
    <div id="container-05" class="w-full h-auto flex flex-col justify-center my-64">
      <div class=" text-center">
        <h2 class="text-2xl md:text-3xl font-bold mb-16">Produtos criados por nós:</h2>
      </div>
      <div class="flex flex-col md:flex-row md:justify-between md:gap-4">
        <div class="md:w-96 w-screen  flex flex-col mt-10 text-center  ">
          <div class="w-full  h-56 mt-0 bg-slate-500">
            <img class="w-full h-full mx-auto" src="../assets/img/projeto01.png" alt="">

          </div>
          <h3 class="my-7 font-bold">Rygprodutora</h3>
          <p class="text-left w-11/12  mx-auto">A RYG Produtora é uma destacada produtora musical, transformando talento em sucesso. O site da RYG
            Produtora, que desenvolvemos com cuidado e criatividade, reflete seu compromisso com a excelência e a
            inovação. Com navegação intuitiva e design atraente, o site oferece todas as informações necessárias para
            artistas e parceiros. Explore o site e descubra como a RYG Produtora pode elevar sua música ao próximo
            nível.</p>
        </div>
        <div class="md:w-96 w-screen  flex flex-col mt-10 text-center ">
          <div class="md:w-full w-12/12 h-56 mt-0 bg-slate-500">
            <img class="w-full h-full mx-auto" src="../assets/img/projeto02.png" alt="">
          </div>
          <h3 class="my-7 font-bold">Revinn</h3>
          <p class="text-left w-11/12  mx-auto">A Revinn é uma renomada administradora de revenue para hotéis, dedicada a maximizar os lucros e otimizar a
            gestão de receitas hoteleiras. O site da Revinn, que desenvolvemos com precisão e inovação, destaca a
            expertise da empresa no setor. Com um design moderno e navegação fácil, o site oferece uma visão clara dos
            serviços e benefícios que a Revinn proporciona aos seus clientes. Explore o site e descubra como a Revinn
            pode transformar a administração de revenue do seu hotel.</p>
        </div>
        <div class="md:w-96 w-screen  flex flex-col mt-10 justify-center text-center ">
          <div class="md:w-full w-12/12 h-56 mt-0 bg-slate-500">
            <img class="w-full h-full mx-auto" src="../assets/img/projeto03.png" alt="">
          </div>
          <h3 class="my-7 font-bold">New place</h3>
          <p class="text-left w-11/12  mx-auto">A New Place é uma prestigiada empresa de design de interiores, dedicada a transformar espaços em ambientes
            únicos e acolhedores. O site da New Place, que desenvolvemos com atenção aos detalhes e estilo, reflete a
            elegância e a sofisticação do trabalho da empresa. Com um design intuitivo e visualmente atraente, o site
            apresenta os projetos realizados e os serviços oferecidos de forma clara e inspiradora. Explore o site e
            descubra como a New Place pode transformar seu espaço com criatividade e expertise.</p>
        </div>
      </div>


    </div>
    <div id="container-06" class="w-full h-auto flex  flex-col md:flex-row justify-center my-20 md:mb-40">
      <div class="md:w-full w-11/12 mx-auto  md:ml-10 flex flex-col  mb-20 text-left">
        <p class=" font-bold  text-sm mb-6">Como funciona</p>
        <h2 class="text-3xl font-bold mb-10">Alinhamos Suas Ideias Contate-nos!</h2>
        <button class="w-20 border bg-lime-500 text-black p-1 border-neutral-950"><a href="#container-08">Contato</a></button>
      </div>
      <div class="timeline">
        <div class="item">
          <i class="fa-solid fa-cube fa-2xl w-10 text-left circle" style="color: #77dd77;"></i>
          <div class="flex flex-col">
            <p class="font-bold text-sm mb-6">Alinhamento com o cliente.</p>
            <p class="text-sm mb-6">Entendemos suas necessidades e alinhamos expectativas para garantir resultados
              excepcionais.</p>
          </div>
        </div>
        <div class="item">
          <i class="fa-solid fa-cube fa-2xl w-10 text-left circle" style="color: #77dd77;"></i>
          <div class="flex flex-col">
            <p class="font-bold text-sm mb-6">Desenvolvimento do protótipo..</p>
            <p class="text-sm mb-6">Criamos um protótipo interativo que visualiza a estrutura e o design do site.</p>
          </div>
        </div>
        <div class="item">
          <i class="fa-solid fa-cube fa-2xl w-10 text-left circle" style="color: #77dd77;"></i>
          <div class="flex flex-col">
            <p class="font-bold text-sm mb-6">Criação do produto.</p>
            <p class="text-sm mb-6">Desenvolvemos o site com funcionalidades avançadas e design responsivo e atraente.
            </p>
          </div>
        </div>
        <div class="item">
          <i class="fa-solid fa-cube fa-2xl w-10 text-left circle" style="color: #77dd77;"></i>
          <div class="flex flex-col">
            <p class="font-bold text-sm mb-6">Entrega da aplicação.</p>
            <p class="text-sm mb-6">Lançamos seu site finalizado, pronto para engajar seu público online.</p>
          </div>
        </div>
      </div>

    </div>
    <div id="container-07" class="w-full h-auto flex flex-col  justify-center text-center my-10 md:mt-40">
      <p class=" font-bold  text-sm mb-6">Nossas redes</p>
      <div class="md:w-2/5 w-11/12  flex flex-row justify-between mx-auto">
        <a href="" class="w-auto flex flex-row justify-center  ">
          <i class="fa-brands fa-facebook fa-lg p-2 w-auto " style="color: #252525;"></i>
          <p class="p-0 my-auto font-bold w-auto">Facebook</p>
        </a>
        <a href="" class="w-auto flex flex-row justify-center ">
          <i class="fa-brands fa-instagram fa-lg fa-lg p-2 w-auto" style="color: #252525;"></i>
          <p class="p-0 my-auto font-bold w-auto">Instagram</p>
        </a>
        <a href="" class="w-auto flex flex-row justify-center ">
          <i class="fa-brands fa-whatsapp fa-lg fa-lg p-2 w-auto" style="color: #252525;"></i>
          <p class="p-0 my-auto font-bold w-auto">Whatsapp</p>
        </a>
      </div>
    </div>
    <div id="container-08" class="w-full h-auto flex flex-col justify-center text-center my-10 ">
      <div class=" py-5 md:w-2/4 w-11/12 mx-auto">
        <div class="text-center ">
          <h2 class="text-3xl font-bold mb-4">Contate-nos</h2>
          <p>Formulário será enviado via email</p>
          <div class="">
            <form class="mt-10" @submit.prevent="sendEmail" method="post">
              <div class="mb-5 md:mb-5 text-left ">
                <label for="nome" class="block text-black text-sm font-bold mb-2">Nome:</label>
                <input type="text" v-model="name" id="nome" name="nome" required
                  class="border-black appearance-none border-2  w-full  py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
              </div>
              <div class="mb-5 md:mb-5 text-left">
                <label for="email" class="block text-black text-sm font-bold mb-2">Endereço de E-mail:</label>
                <input type="email" id="email" v-model="email" name="email" required
                  class="border-black appearance-none border-2  w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
              </div>

              <div class="mb-5 md:mb-5 text-left">
                <label for="assunto" class="block text-black text-sm font-bold mb-2">Assunto:</label>
                <input type="text" id="assunto" v-model="assunto" name="assunto" required
                  class="border-black appearance-none border-2  w-full py-3 px-3 text-black leading-tight focus:outline-none focus:shadow-outline">
              </div>

              <div class="mb-5 md:mb-5 text-left">
                <label for="mensagem" class="block text-black text-sm font-bold mb-2">Mensagem:</label>
                <textarea id="mensagem" name="mensagem" v-model="message" rows="4" required
                  class="border-black appearance-none border-2  w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
              </div>

              <input class="border bg-black text-stone-50 px-4 py-1 border-neutral-950 w-auto " type="submit"
                value="Enviar">
            </form>

          </div>
        </div>
      </div>


    </div>


    </div>
    <footer class="bg-black text-white py-6 mt-auto">
      <div class="container w-9/12 mx-auto flex flex-col md:flex-row md:justify-between justify-center items-center px-4">
        <div class=" flex justify-center   items-center mx-auto">
          <img src="../assets/img/vi.png " alt="Logo" class="h-32 rounded-full w-auto">
        </div>
        <div class="social-icons flex space-x-4 my-10">
          <a href="#" class="text-white text-xl">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="#" class="text-white text-xl">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#" class="text-white text-xl">
            <i class="fab fa-instagram"></i>
          </a>
        </div>
        <div class="md:items-end flex text-center md:text-right">
          <h3>© 2023 TechFlow. All rights reserved.</h3>
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