import React from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JavaScript from '../assets/javascript.png'
import Reactjs from '../assets/react.png'
import Node from '../assets/node.png'
import Redux from '../assets/redux.png'
import Next from '../assets/next.png'
import Mongo from '../assets/mongo.png'

const Skills = () => {
  return (
    <div name="skills" className="bg-[#0a192f] w-full h-screen">
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full text-gray-300'>
            <div>
                <p className="text-4xl font-bold inline border-b-4 border-pink-600">Skills</p>
            </div>
            <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 ">
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={HTML} alt="html img" />
                    <p className="my-4">HTML</p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={CSS} alt="html img" />
                    <p className="my-4">CSS</p>
                </div> <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={JavaScript} alt="html img" />
                    <p className="my-4">Javascript</p>
                </div> <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={Reactjs} alt="html img" />
                    <p className="my-4">React</p>
                </div> <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={Redux} alt="html img" />
                    <p className="my-4">Redux</p>
                </div> <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={Mongo} alt="html img" />
                    <p className="my-4">MongoDB</p>
                </div> <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={Node} alt="html img" />
                    <p className="my-4">Node</p>
                </div> <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={Next} alt="html img" />
                    <p className="my-4">Nextjs</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills