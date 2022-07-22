import {SparklesIcon} from "@heroicons/react/outline"
import Input from '../components/Input';
import Post from "./Post";

export default function Feed() {
  const posts=[
    {
      id:"1",
      name:"Dan Musee",
      username:"dmuseeray",
      userImg:"https://imgs.search.brave.com/sQF-4cufXFk2wnJpcrER7MdgLKPTHL-oTdLW9AAqHHM/rs:fit:600:600:1/g:ce/aHR0cHM6Ly8xLmJw/LmJsb2dzcG90LmNv/bS8tQWxzcTlCbnY2/N2svVkE0T25aazEz/Q0kvQUFBQUFBQUFE/dWcvV2FDb25VUlVn/OE0vczE2MDAvUm91/bmQlMkJQcm9maWxl/JTJCUGljLnBuZw",
      img:"https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      text:"It was a nice summit",
      timestamp:"2 hours ago"
    },
    {
      id:"2",
      name:"Ronney Munene",
      username:"ronneyyy",
      userImg:"https://imgs.search.brave.com/sQF-4cufXFk2wnJpcrER7MdgLKPTHL-oTdLW9AAqHHM/rs:fit:600:600:1/g:ce/aHR0cHM6Ly8xLmJw/LmJsb2dzcG90LmNv/bS8tQWxzcTlCbnY2/N2svVkE0T25aazEz/Q0kvQUFBQUFBQUFE/dWcvV2FDb25VUlVn/OE0vczE2MDAvUm91/bmQlMkJQcm9maWxl/JTJCUGljLnBuZw",
      img:"https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      text:"year gladd i joined",
      timestamp:"3 hours ago"
    },

  {
      id:"3",
      name:"Ronney Munene",
      username:"ronneyyy",
      userImg:"https://imgs.search.brave.com/sQF-4cufXFk2wnJpcrER7MdgLKPTHL-oTdLW9AAqHHM/rs:fit:600:600:1/g:ce/aHR0cHM6Ly8xLmJw/LmJsb2dzcG90LmNv/bS8tQWxzcTlCbnY2/N2svVkE0T25aazEz/Q0kvQUFBQUFBQUFE/dWcvV2FDb25VUlVn/OE0vczE2MDAvUm91/bmQlMkJQcm9maWxl/JTJCUGljLnBuZw",
      img:"https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      text:"year gladd i joined",
      timestamp:"3 hours ago"
    },
  ]
  return (
    <div className="xl:ml-[370px] border-l border-r border-gray-200 xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
    <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
      <h2 className="text-lg sm:text-xl font-bold cursor-pointer">home</h2>
      <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
        <SparklesIcon className="h-5"/>
      </div>
    </div>
    <Input/>
    {posts.map((posts)=>(
      <Post key={posts.id} posts={posts}/>
    ))}
    </div>

  )
}
