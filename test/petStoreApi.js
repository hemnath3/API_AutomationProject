const request = require("supertest");
const expect = require("chai").expect;

describe("pet store API", () => {
  it("POST Request-> Add a new pet to the store", () => {
    request("https://petstore.swagger.io/v2")
      .post("/pet")
      .send({
        category: { id: 9952221978, name: "string" },
        id: 0,
        name: "mongoose",
        photoUrls: ["string"],
        status: "available",
        tags: [{ id: 0, name: "string" }],
      })
      .accept("Accept", "application/json")
      .end((err, res) => {
          
         
        
      expect(200);
      
        
        
      });
  });

  it("PUT Request-> Update a new pet to the store", () => {
    request("https://petstore.swagger.io/v2")
      .put("/pet")
      .send({
        category: { id: 9952221878, name: "string" },
        id: 0,
        name: "rabbit",
        photoUrls: ["string"],
        status: "available",
        tags: [{ id: 0, name: "string" }],
      })
      .accept("Accept", "application/json")
      .end((err, res) => {
         
          
        
      expect(200);
      
        
        
      });
  });


  it("GET Request-> Find a pet by its Id", () => {
    request("https://petstore.swagger.io/v2/pet")
      .get("/9222968140497184036")
      .end((err, res) => {
        expect(res.body.name).to.be.equal("mongoose");
        
      });
  });

  it("DELETE Request-> Delete a pet by its Id", () => {
    request("https://petstore.swagger.io/v2/pet")
      .delete("/9222968140497183881")
      .end((err, res) => {
        expect(200);
      });
  });





});
