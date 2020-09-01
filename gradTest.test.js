function createMenuData(data) {
  
  const refinedData = [];
  data.forEach(function(item){
    if(item.includes('/')){
      refinedData.push(item)
    }
  })
  const dataSplit = refinedData.map((item) => item.split('/')).sort();

  let formattedData = [
    {
      title: dataSplit[0][0],
      data: [dataSplit[0][1]]
    }
  ];
  
  for (let i = 1; i < dataSplit.length; i++) {
    const lastDataAdded = formattedData[formattedData.length -1];
    const nextDataToCompare = dataSplit[i];
    if(lastDataAdded.title === nextDataToCompare[0]){
      formattedData[formattedData.length -1].data.push(nextDataToCompare[1]) ;
    } else {
      formattedData.push({
        title: nextDataToCompare[0],
        data: [nextDataToCompare[1]]
      });
    }
  }
 return formattedData;
}


// Test suite --------- //

describe("menu Data Generator", () => {
    
  it("works in the simple case scenario, creating correct data structure", () => {
    const data = ["parent1/parent1child"];

    const expectedResult = [
      {
        title: "parent1",
        data: ["parent1child"]
      }
    ];

    const actualResult = createMenuData(data);
    expect(actualResult).toMatchObject(expectedResult);
  });
  
  
  it("works with one parent 2 childs, creating correct data structure", () => {
    const data = ["parent1/parent1child","parent1/parent1child2"];

    const expectedResult = [
      {
        title: "parent1",
        data: ["parent1child","parent1child2"]
      }
    ];

    const actualResult = createMenuData(data);
    expect(actualResult).toMatchObject(expectedResult);
  });
  
  it("works with 2 parents, 2 childs, creating correct data structure", () => {
    const data = ["parent1/parent1child","parent1/parent1child2","parent2/parent2child","parent2/parent2child2"];

    const expectedResult = [
      {
        title: "parent1",
        data: ["parent1child", "parent1child2"]
      },
      { title: "parent2", data: ["parent2child", "parent2child2"] }
    ];

    const actualResult = createMenuData(data);
    expect(actualResult).toMatchObject(expectedResult);
  });
  
  it("works with 2 parents given in any order, 2 childs, creating correct data structure", () => {
    const data = ["parent2/parent2child","parent1/parent1child2","parent1/parent1child","parent2/parent2child2"];

    const expectedResult = [
      {
        title: "parent1",
        data: ["parent1child", "parent1child2"]
      },
      { title: "parent2", data: ["parent2child", "parent2child2"] }
    ];

    const actualResult = createMenuData(data);
    expect(actualResult).toMatchObject(expectedResult);
  });


  it("creates correct data structure ", () => {
      const data = [
        "parent1/parent1child",
        "parent1/parent1child2",
        "parent2/parent2child",
        "parent2/parent2child2",
        "parent1/parent1child3",
        "parent3",
        "parent3/parent3child1",
        "parent4"
      ];
  
      const expectedResult = [
        {
          title: "parent1",
          data: ["parent1child", "parent1child2", "parent1child3"]
        },
        { title: "parent2", data: ["parent2child", "parent2child2"] },
        { title: "parent3", data: ["parent3child1"] }
      ];
  
      const actualResult = createMenuData(data);
      expect(actualResult).toMatchObject(expectedResult);
    });

    it("Random Names, different cases", () => {
      const data = [
        "Ben/Paul",
        "Carl/Peter",
        "Alan/Peter",
        "Carl/James",
        "parent100/parent100child",
        "Carl",
        "Jonh/Sean",
        "Ben/James"
      ];
  
      const expectedResult = [
        { title: "Alan",data: ["Peter"]},
        { title: "Ben", data: ["James","Paul"] },
        { title: "Carl", data: ["James","Peter"] },
        { title: "Jonh", data: ["Sean"] },
        { title: "parent100", data: ["parent100child"] }
      ];
  
      const actualResult = createMenuData(data);
      expect(actualResult).toMatchObject(expectedResult);
    });

    it("Sorted parents without children", () => {
      const data = [
        "Alan",
        "Ben",
        "Ben/Paul",
        "Carl/Peter",
        "Alan/Peter",
        "Carl/James",
        "parent100/parent100child",
        "Carl",
        "Jonh/Sean",
        "Ben/James"
      ];
  
      const expectedResult = [
        { title: "Alan",data: ["Peter"]},
        { title: "Ben", data: ["James","Paul"] },
        { title: "Carl", data: ["James","Peter"] },
        { title: "Jonh", data: ["Sean"] },
        { title: "parent100", data: ["parent100child"] }
      ];
  
      const actualResult = createMenuData(data);
      expect(actualResult).toMatchObject(expectedResult);
    });

  });