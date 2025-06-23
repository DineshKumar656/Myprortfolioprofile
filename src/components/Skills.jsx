// src/components/Skills.jsx
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "../firebaseConfig";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchSkills = async () => {
      const querySnapshot = await getDocs(collection(db, "skills"));
      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setSkills(data);
    };
    fetchSkills();
  }, []);

  return (
    <section>
      <h2 className="text-xl font-bold mb-4">My Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {skills.map(skill => (
          <div key={skill.id} className="p-4 border rounded shadow">
            <img src={skill.iconURL} alt={skill.title} className="h-10 w-10 mb-2" />
            <p>{skill.title}</p>
            <small>{skill.level}</small>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
