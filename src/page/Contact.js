function Contact(){
    return(
     <>
             <br></br>
             <br></br>
     <h1 className="contacttitle">
         My Contact Page 
     </h1>
    <form className="contactform" action="../">
        <span>Full Name: </span>
        <input type="text" itemID="fullname" className="inputbox"></input>
        <br></br>
        <br></br>
        <span>Email: </span>
        <input type="email" itemID="email"  className="inputbox"></input>
        <br></br>
        <br></br>
        <span>Phone: </span>
        <input type="text" itemID="phone"  className="inputbox"></input>
        <br></br>
        <br></br>
        <span>Question you wanna asked: </span>
        <br></br>
        <textarea className="contact_textarea" itemID="questiontext"></textarea>
        <br></br>
        <br></br>
        <button type="submit" className="contactbutton">Submit</button>
    </form>
     </>
    ) 
 }
 
 export default Contact