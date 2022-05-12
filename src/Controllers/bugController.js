import bugModel from "../Models/bugModel"

export function retrieveBugs(){
    let data = [];



    data.push(new bugModel({
        _id:1231512311,
        name:"crashed on load",
        details:"crashes after 3 seconds",
        steps:"open application and it crashes after 3 seconds",
        version:"V2.0",
        assigned:"Max Morrow",
        creator:"Joe schmoe",
        priority:1,
        time:"23:42"
    }))
    data.push(
      new bugModel({
        _id: 1231512311,
        name: "crashed on edit settings",
        details: "crashes after went to settings",
        steps: "open application and it crashes after going to settings",
        version: "V1.0",
        assigned: "Mae",
        creator: "Joe dirte",
        priority: 3,
        time: "13:37",
      })
    );
    let sorted = data.sort((a,b)=>{return a.priority - b.priority})
    return sorted;
}