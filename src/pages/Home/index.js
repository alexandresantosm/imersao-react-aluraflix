import React from 'react';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import Main from '../../components/Main';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import dadosIniciais from '../../data/dados_iniciais.json';

function Home() {
  return (
    <>
      <Menu />
      <Main> 
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"}
      />
      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />      

      <Carousel
        category={dadosIniciais.categorias[3]}
      />      

      <Carousel
        category={dadosIniciais.categorias[4]}
      />      

      <Carousel
        category={dadosIniciais.categorias[5]}
      /> 
      </Main>
      <Footer />
    </>
  );
}

export default Home;
