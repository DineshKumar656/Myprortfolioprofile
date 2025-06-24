import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const snapshot = await getDocs(collection(db, "skills"));
        setSkills(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      } catch (err) {
        console.error("Error fetching skills:", err);
      }
    };
    fetchSkills();
  }, []);

  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {skills.map(skill => (
          <div key={skill.id} className="bg-gray-100 p-4 rounded shadow">
            {skill.iconURL && <img src={skill.iconURL} alt={skill.title} className="h-12 mx-auto mb-2" />}
            <h3 className="text-lg font-semibold">{skill.title}</h3>
            {skill.level && <p className="text-sm text-gray-600">{skill.level}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
