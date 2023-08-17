import React from 'react';
import './App.scss';
import { Route, Navigate, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import AboutPage from '../navigation/About/AboutPage';
import Home from '../pages/Home/Home';
import  { Posts, blogLoader } from '../pages/pagePosts/Posts/Posts';
import NotFooundPage from '../navigation/NotFooundPage/NotFooundPage';
import Layout from '../navigation/Layout/Layout';
import  {SinglePage}  from '../SinglePage';
import EditPost from '../pages/pagePosts/EditPost/EditPost';
import LoginPage from '../LoginPage';
// import RequireAuth from '../../hoc/RequireAuth';
import { AuthProvider } from '../../hoc/AuthProvider';
import Pokemons from '../pages/Pokemons/Pokemons';
import AboutGames from '../navigation/AboutGames/AboutGames';
// import Cube from '../pages/games/Cube/Cube';


const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route path="login" element={<LoginPage />} />
    <Route index element={
          // <RequireAuth>
            <Home />
          // </RequireAuth>
          }  loader={blogLoader}  />
    <Route path="about/*" element={<AboutPage />}> 
      {/* вложенные компоненты */}
      <Route path="contacs" element={<p>It`s component - Our contacs</p>}/>
      <Route path="team" element={<p>It`s component - Our team</p>}/>
    </Route>
    <Route path="pokemons" element={<Pokemons />} /> 
    {/* два адреcа на одну страницу без сохранения в истории */}
    <Route path="about-us" element={<Navigate to={'/about'} replace/>} />
    <Route path="posts" element={<Posts />} loader={blogLoader} />
    <Route path="posts/:id" element={<SinglePage />}/>
    <Route path="posts/:id/edit" element={<EditPost />} />
    <Route path="games/*" element={<AboutGames />}> 
      {/* вложенные компоненты */}
      {/* <Route path="game_1" element={<Cube />}/> */}
      <Route path="game_2" element={<p>It`s component - Our team</p>}/>
    </Route>
    <Route path="*" element={<NotFooundPage />} />
  </Route>
))

function App():any {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
