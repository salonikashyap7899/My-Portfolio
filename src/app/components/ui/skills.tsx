import React from "react";
import SkillData from "../../components/SkillData";

// Updated fronted_skill array with language names
const fronted_skill = [
  { Image: 'https://miro.medium.com/v2/resize:fit:1200/1*y6C4nSvy2Woe0m7bWEn4BA.png', name: 'React' },
  { Image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMZD7gtOg-aRXiYZ_ZkmYGch46UxHAygL-Pw&s', name: 'Next.js' },
  { Image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/HTML5_logo_black.svg/240px-HTML5_logo_black.svg.png', name: 'HTML5' },
  { Image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9EMrV3oiJPe4_eu28lb7q4sXnisVxxKIK3w&s', name: 'JavaScript' },
  { Image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1Gds858eYpswx4_2EEhn4hAg8KBJg5ws0kerUN6GQlasBmq3DjhmLkmrllchS8cAmvvo&usqp=CAU', name: 'CSS3' },
  { Image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxVPP0hma0E0BhQ7RLpvpWpIXy9J6sALsoGdQzyBwdTmUf16z-QeTVa2MuBeMaiWoKxKA&usqp=CAU', name: 'Tailwindcss' },
  { Image: 'https://w7.pngwing.com/pngs/452/24/png-transparent-js-logo-node-logos-and-brands-icon.png', name: 'Node.js' },
  { Image: 'https://e7.pngegg.com/pngimages/628/415/png-clipart-mongodb-inc-database-nosql-logo-mysql-text-logo.png', name: 'MongoDb' },
  { Image: 'https://w7.pngwing.com/pngs/384/848/png-transparent-mysql-php-database-javascript-ajax-carnifex-blue-text-logo.png', name: 'MySQl' },
  { Image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCZgHpkWPUZ3sICFf86S0_y-H3hyPPchjtDw&s', name: 'Php' },
  { Image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBu_Bb-nWvALkMw6p-6RoLopMb48EFv_1jS_SDBcCdaOyxOW849FV4kbur6ZJeH3ShyGw&usqp=CAU', name: 'Express.js' },
];

const imageConfigDefault = {
  width: 80,
  height: 80,
};

const Skills = () => {
  return (
    <div className="cursor-pointer gap-2"> 
      <section
        id="skills"
        className="flex flex-col items justify-center gap-1 h-full relative overflow-hidden py-20"
        style={{ transform: "scale(0.9)" }}
      >
        <div className="flex flex-row justify-around cursor-pointer flex-wrap mt-4 gap-1 items-center">
          {fronted_skill.map((skill, index) => (
            <div
              key={index}
              className="relative group"
            >
              <SkillData
                src={skill.Image}
                width={imageConfigDefault.width}
                height={imageConfigDefault.height}
                index={index}
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-75 text-white text-sm font-semibold transition-opacity duration-300">
    
              </div>
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2  px-2 py-1 bg-cyan-500 text-black mb-5 text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {skill.name}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skills;
