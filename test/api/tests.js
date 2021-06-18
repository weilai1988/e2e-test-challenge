const request = require('supertest');
const expect = require("chai").expect;
const site = 'https://api.demoblaze.com';


describe("Get product entryies", function () {
  it("should returns phone products by default", async function () {
    const response = await request(site).get("/entries");
    expect(response.status).to.eql(200);
    expect(response.type).to.eql('application/json');
    // TODO: the proper way to handle assertion below would be to create a custom json handler. It needs:
    // 1. convert text to object
    // 2. extract key and values for each item in the JSON
    // 3. return results for validation
    expect(response.text).to.have.string('"LastEvaluatedKey":{"id":"9"}');
    expect(response.text).to.have.string('"title":"Samsung galaxy s6"');
  });
});

describe("User Login API", function () {
    it("should returns phone products by default", async function () {
      let response = await request(site)
        .post("/login")
        .send({"username":"test22345","password":"dGVzdDIyMzQ1"})
        .set('Accept', 'application/json');
      expect(response.status).to.eql(200);
      expect(response.type).to.eql('application/json');
      expect(response.unauthorized).to.be.false;
      let autoToken = response.text.substring(13, 37);

      // Log out
      //Logout is facing some internal error. Further investigation required
    //   let payload = `{"token":"${autoToken}"}`
    //   console.log(payload)
    //   response = await request(site)
    //     .post("/check")
    //     .send(payload);
    //   console.log(response)
    });
  });
  
// Due to the nature of tesitng site, all checkout functions are UI functions only. 
// The logic below is correct, however server doesn't accpet checkout API call.

// describe("A active user", function () {
//     it("should be able to add product to cart and checkout", async function () {
//       let response = await request(site)
//         .post("/login")
//         .send({"username":"test22345","password":"dGVzdDIyMzQ1"})
//         .set('Accept', 'application/json');
//       expect(response.status).to.eql(200);
//       expect(response.type).to.eql('application/json');
//       expect(response.unauthorized).to.be.false;
//       let autoToken = response.text.substring(13, 37);
//       let requestBody = `{"id":"a57de4c6-02bb-087e-98c9-e41f88f11792","cookie":"${autoToken}","prod_id":1,"flag":true}`
//       response = await request(site)
//         .post("/addtocart")
//         .send(requestBody);
//     //   expect(response.status).to.eql(200);
//     //   expect(response.type).to.eql('application/json');
//     //   expect(response.unauthorized).to.be.false;


//       console.log(response)
//     });
//   });
  