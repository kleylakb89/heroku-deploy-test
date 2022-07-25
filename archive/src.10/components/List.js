import React from 'react';

function ListItems(props) {
  return (
    <>
      <h3>{props.title}</h3>
      <ul className="list-group">
        {props.items.map((item) => {
          return (
            <li className="list-group-item" key={item.id}>{`${item.name}`}</li>
          );
        })}
      </ul>
    </>
  )
}

function List(props) {
  const purchased = [];
  const notPurchased = [];

  for (let item of props.groceries) {
    item.purchased ? purchased.push(item) : notPurchased.push(item)
    // if (item.purchased) {
    //   purchased.push(item)
    // } else {
    //   notPurchased.push(item);
    // }
  }

  return (
    <>
      <ListItems items={purchased} title="Purchased" />
      <ListItems items={notPurchased} title="Not Purchased" />
    </>
  );
}

export default List;
