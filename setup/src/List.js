import React from 'react';

const List = ({person}) => {
  return (
    <>
      
      {person.map((a)=>{
        const {id, name, age, image} = a;
        return(
          <article key={id}>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </article>
        )
      })}
    </>
  );
};

export default List;
