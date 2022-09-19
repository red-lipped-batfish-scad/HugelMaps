import React from 'react';

/*select from dropdown on category of material, i.e. compost, wood,
 mulch, soil, leaves*/
//user will input specific item/describe the item they are offering,
// they will type in coffee ground, manure etc
//user will input quantity
//user puts in their location
//user inputs their preferred contact
//submit button to send post submission to backend + render in the feed
{
  /* <button onClick={submit}>Submit</button> */
}

//sends a post request on submission to the database receives a 200 status code in response

const PostCreator = ({ onFeedItemCreated }) => {
  const handleSubmit = (event) => {
    console.log('something happened on submit');
    event.preventDefault();
    console.log(event);
    console.log(event.target[0].value);
    console.log(event.target[1].value);
    console.log(event.target[2].value);
    console.log(event.target[3].value);
    console.log(event.target[4].value);

    fetch('http://localhost:3000/feed', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      mode: 'no-cors',
      body: JSON.stringify({
        Material: event.target[0].value, //make keys lowercase
        Detail: event.target[1].value,
        Quantity: event.target[2].value,
        Location: event.target[3].value,
        Contact: event.target[4].value,
      }),
    })
      .then((res) => res.json())
      .then((data) => onFeedItemCreated(data)) // Made change here
      .catch((err) => console.log('error', err));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <select name="Materials">
          Material
          <option>Wood</option>
          <option>Compost</option>
          <option>Mulch</option>
          <option>Soil</option>
          <option>Leaves</option>
        </select>

        <label>Description</label>
        <input></input>

        <label htmlFor="quantity">Quantity</label>
        <input name="quantity"></input>

        <label>Location</label>
        <input></input>

        <label>Contact</label>
        <input></input>

        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
};

export default PostCreator;
