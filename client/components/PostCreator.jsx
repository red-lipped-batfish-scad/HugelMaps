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

const PostCreator = ({ onFeedItemCreated, closePostCreator }) => {
  const handleSubmit = (event) => {
    console.log('something happened on submit');
    event.preventDefault();
    console.log(event);
    console.log(event.target[0].value);
    console.log(event.target[1].value);
    console.log(event.target[2].value);
    console.log(event.target[3].value);
    console.log(event.target[4].value);


    fetch('/feed/give', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        /*'Access-Control-Allow-Origin': '*',*/
      },
      /*mode: 'no-cors',*/
      body: JSON.stringify({
        material: event.target[0].value, //make keys lowercase
        detail: event.target[1].value,
        quantity: event.target[2].value,
        location: event.target[3].value,
        contact: event.target[4].value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        closePostCreator(false);
        console.log(data);
        onFeedItemCreated(data);
      }) // Made change here
      .catch((err) => console.log('error', err));
  };

  return (
    <div className="postCreatorContainer">
      <form className='form' onSubmit={handleSubmit}>
        <select name="Materials">
          <option>Wood</option>
          <option>Compost</option>
          <option>Mulch</option>
          <option>Soil</option>
          <option>Leaves</option>
        </select>

        <label htmlFor="description">Description</label>
        <input name="quantity"></input>

        <label htmlFor="quantity">Quantity</label>
        <input name="quantity"></input>

        <label htmlFor="location">Location</label>
        <input name="location"></input>

        <label htmlFor="contact">Contact</label>
        <input name="contact"></input>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default PostCreator;
