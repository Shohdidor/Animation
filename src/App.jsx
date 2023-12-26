import { Swiper, SwiperSlide } from 'swiper/react';
import 'animate.css';


import 'swiper/css';
import 'swiper/css/navigation';

import './styles.css';

import { Navigation } from 'swiper/modules';

import Switcher from './components/Swithcer'
import './App.css'
import Shop from '@mui/icons-material/AddShoppingCartTwoTone';
import Card from './components/Card';
import Photo1 from "/img/image (6).png"
import { Card2 } from './components/Card';

import Foto1 from "/img/Frame (21).png"
import Foto2 from "/img/Frame (20).png"
import Foto3 from "/img/Frame (19).png"

import Art1 from "/img/Frame (22).png"
import Art2 from "/img/Frame (23).png"


import Slide1 from "/img/Frame (24).png"
import Slide2 from "/img/Frame (25).png"
import Slide3 from "/img/Frame (26).png"
import Slide4 from "/img/Frame (27).png"
import Slide5 from "/img/Frame (28).png"
import Slide6 from "/img/Frame (29).png"


import React,{useEffect, useState} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import { IconButton, TextField } from '@mui/material';
import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone';
import EditIcon from '@mui/icons-material/Edit';

const App = () => {
  useEffect(() => {
    AOS.init();
  }, [])

  const [ data , setData ] = useState ( [ { id: 1 , name: "Peter Parker" , isCompleted : false },
  { id: 2 , name: "Migel Ohar" , isCompleted : false },
  { id: 3 , name: "Miles Morales" , isCompleted : false },
  { id: 4 , name: "Jessy Pinkman" , isCompleted : false }])


  // Delete Todo Func
  function del(id){
    setData(data.filter((elem) => {
      return elem.id != id
    }))
  }

  // Add Todo Func
  
  const [inpAddName, setInpAddName] = useState("") 
  function add(){
    const newTodo = {
      id: data.length + 1,
      name : inpAddName,
      isCompleted: false
    };
    data.push(newTodo)
    // setData(data)
    setInpAddName("")
  }

  function compUser (id) {
    let newEdit = data.map (( elem ) => {
      if ( elem . id == id ){
        elem.isCompleted = !elem.isCompleted
      }
      return elem 
    })
    setData ( newEdit )
  }

  return (
    <> 
    <div className='overflow-hidden'>
      
    <div className='dark:bg-slate-900 text-black dark:text-white h-[700] sm:h-[540vh]'>
    <Switcher />
    <div>
      <h1 className='font-black text-[20px] mt-[-30px] ml-[20px]'>Pompeo</h1>
      <ul className='hidden sm:flex sm:justify-evenly sm:w-[500px] sm:ml-[880px] sm:mt-[-27px]'>
        <li>HOME</li>
        <li>ABOUT</li>
        <li>SHOP</li>
        <li>CONTACT</li>
        <li> <Shop /> Cart </li>
      </ul>
    </div>
    
    <div className='Boom dark:bg-none'>
      <Card h3={"Pompeo Pottery"} h1={"Unique Porcelain Stone Collection"} p={"Unique & modern pottery made by our master in porcelain & stones"} btn={"Shop Collection"} img={Photo1} />
    </div>

    <Card2 h3={"Product Categories"} h1={"Porcelain Pottery"} img1={Foto1} img2={Foto2} img3={Foto3}/>
    <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className='sm:flex sm:w-[1400px] sm:m-auto sm:mt-[50px]'>

    <div className='text-center mb-[20px] mt-8 sm:text-left sm:mt-8 sm:ml-[100px]'>
      <h1 className='font-black text-[20px] mb-[10px] sm:w-[300px] sm:text-[30px]'>
      Hand Grafted
      Pottery since 1990
      </h1>
      <p className='font-medium text-[13px] sm:text-[14px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus posuere.</p>
    </div>
    <div className='text-center sm:text-left sm:mt-7 sm:ml-[280px]'>
      <h1 className='font-black text-[20px] mb-[10px] sm:w-[400px] sm:text-[30px]'>
        We Provide Premium Pottery Produts
      </h1>
      <p className='font-medium text-[13px] sm:text-[14px]'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus posuere.</p>
    </div>

    </div>


    <div data-aos="fade-right"
     data-aos-offset="500"
     data-aos-easing="ease-in-sine" className='mt-[70px] sm:flex sm:justify-around sm:pr-[150px]'>
      <div className='m-auto w-[200px] sm:w-[400px]'>
        <img src={Art1} alt="error" />
      </div>
      <div className='text-center sm:text-left sm:mt-[40px]'>
        <h1 className='font-black mt-[20px] text-[24px] mb-[20px]'>
        Gold & Black Pottery
        </h1>
        <p className='font-medium text-[14px] mb-[14px] sm:w-[500px] sm:text-[20px]'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore dolore aua. Ut enim ad minim veniam, quis nostrud exercitationulco laboris nisi ut aliquip ex ea commodo consequatuisaute.
        </p>
        <h3 className='font-bold'>
        View Details
        </h3>
      </div>

    </div>


    <div data-aos="fade-left"
     data-aos-offset="500"
     data-aos-easing="ease-in-sine" className='mt-[70px] sm:flex sm:justify-around'>
      <div className='text-center sm:text-left sm:mt-[40px] sm:pl-[150px]'>
        <h1 className='font-black mt-[20px] text-[24px] mb-[20px]'>
        Orange Ceramic
        </h1>
        <p className='font-medium text-[14px] mb-[14px] sm:w-[500px] sm:text-[20px]'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore dolore aua. Ut enim ad minim veniam, quis nostrud exercitationulco laboris nisi ut aliquip ex ea commodo consequatuisaute.
        </p>
        <h3 className='font-bold'>
        View Details
        </h3>
      </div>
      <div className='m-auto w-[200px] sm:w-[400px]'>
        <img src={Art2} alt="error" />
      </div>

    </div>

<div>

    <Swiper navigation={true} modules={[Navigation]} className="mySwiper mt-[50px] ">
        <SwiperSlide> <div><div className='block'>  <img src={Slide1} alt="error" className='w-[40px] sm:mt-[50px] ' /> </div>
       <div className='dark:text-green-600'>
        <p className='sm:font-black sm:mt-[20px]'>Decor Plate</p> 
        <span className='font-bold '>$ 65.00 USD</span>
        <br /><br />
        </div>
        </div>
        </SwiperSlide>
        <SwiperSlide> <div><div className='block'>  <img src={Slide2} alt="error" className='w-[40px] sm:mt-[50px] ' /> </div>
       <div className='dark:text-green-600'>
        <p className='sm:font-black sm:mt-[20px]'>Mint Pottery</p> 
        <span className='font-bold '>$ 75.00 USD</span>
        <br /><br />
        </div>
        </div>
        </SwiperSlide>
        <SwiperSlide> <div><div className='block'>  <img src={Slide3} alt="error" className='w-[40px] sm:mt-[50px] ' /> </div>
       <div className='dark:text-green-600'>
        <p className='sm:font-black sm:mt-[20px]'>Set Of Potterys</p> 
        <span className='font-bold '>$ 125.00 USD</span>
        <br /><br />
        </div>
        </div>
        </SwiperSlide>
        <SwiperSlide> <div><div className='block'>  <img src={Slide4} alt="error" className='w-[40px] sm:mt-[50px] ' /> </div>
       <div className='dark:text-green-600'>
        <p className='sm:font-black sm:mt-[20px]'>Orange Ceramic</p> 
        <span className='font-bold '>$ 55.00 USD</span>
        <br /><br />
        </div>
        </div>
        </SwiperSlide>
        <SwiperSlide> <div><div className='block'>  <img src={Slide5} alt="error" className='w-[40px] sm:mt-[50px] ' /> </div>
       <div className='dark:text-green-600'>
        <p className='sm:font-black sm:mt-[20px]'>Dark Bowl</p> 
        <span className='font-bold '>$ 115.00 USD</span>
        <br /><br />
        </div>
        </div>
        </SwiperSlide>
        <SwiperSlide> <div><div className='block'>  <img src={Slide6} alt="error" className='w-[40px] sm:mt-[50px] ' /> </div>
       <div className='dark:text-green-600'>
        <p className='sm:font-black sm:mt-[20px]'>Square Pottery</p> 
        <span className='font-bold '>$ 75.00 USD</span>
        <br /><br />
        </div>
        </div>
        </SwiperSlide>

        </Swiper>

</div>
<div className='sm:ml-[560px]'>
        <Button variant="contained" sx={{background:"orangered", marginLeft:"110px", marginTop:"20px"}} className='dark:bg-green-600 ' >View All Products</Button>
</div>

<div className='End'>
  <div className='text-center sm:text-left sm:pl-[250px]'>
    <h3 className='text-red-600 font-bold text-[20px] pt-[100px] sm:pt-[150px]'>
    Pompeo Pottery
    </h3>
    <h1 className='text-[30px] text-black font-black sm:text-[40px]'>
    Ready to start shopping?
    </h1>
    <p className='text-gray-600 font-bold sm:w-[540px]'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit . Suspendisse varius enim in eros elementum.
    </p>
    <div>
        <Button variant="contained" sx={{background:"orangered", marginTop:"20px"}} className='dark:bg-red-600 ' >New Collection</Button>
</div>


  </div>
</div>

<div className='text-center '>
    <TextField  sx={{marginTop: "10px"}} value={inpAddName} onChange={(event) => setInpAddName(event.target.value)} label="outlined" focused variant="outlined" />
    <IconButton color='info'>
      <AddCircleTwoToneIcon onClick={add} />
    </IconButton>
    {data.map (( elem )=> {
      return (
        <div key={elem.id} className='flex justify-center mt-[10px] items-center'>
          <h1 className={elem.isCompleted?"text-[red] dark:text-green-500 dark:font-bold":"text-black dark:text-orange-500 dark:font-bold"}>
            {elem.name}
          </h1>
          <IconButton onClick={() => del(elem.id)} color='error'>
            <DeleteIcon/>
          </IconButton>
          <input type="checkbox" checked={elem.isCompleted} onChange={()=>compUser (elem.id)}/>
          <EditIcon />

        </div>        
        )
      })}
</div>



    </div>
    </div>
    
    </>
  )
}

export default App
