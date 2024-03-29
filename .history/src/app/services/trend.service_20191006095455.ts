import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrendService {
  public trends:any = [
    {
        "name": "Bo Nix",
        "value": 2243772
    },
    {
        "name": "Auburn",
        "value": 2243772
    },
    {
        "name": "Rick Perry",
        "value": 2243772
    },
    {
        "name": "AUBvsUF",
        "value": 2243772
    },
    {
        "name": "Didi",
        "value": 2243772
    },
    {
        "name": "HookEm",
        "value": 2243772
    },
    {
        "name": "Trask",
        "value": 2243772
    },
    {
        "name": "GoGators",
        "value": 2243772
    },
    {
        "name": "RIPDaddyStar",
        "value": 2243772
    },
    {
        "name": "Dan Mullen",
        "value": 2243772
    },
    {
        "name": "Austin Kendall",
        "value": 22437721
    },


];

public users: any = [
  {
      "id_str": "90552683",
      "name": "Rob Schneider",
      "screen_name": "RobSchneider",
      "location": "Los Angeles, CA",
      "profile_image_url": "http://pbs.twimg.com/profile_images/1108756307320815616/3gO4qX9R_normal.jpg"
  },
  {
      "id_str": "135249573",
      "name": "Rob Gronkowski",
      "screen_name": "RobGronkowski",
      "location": "",
      "profile_image_url": "http://pbs.twimg.com/profile_images/2936850029/e45048737edd23a76c93733953dca41c_normal.jpeg"
  },
  {
      "id_str": "6480732",
      "name": "Rob Huebel",
      "screen_name": "robhuebel",
      "location": "Los Angeles",
      "profile_image_url": "http://pbs.twimg.com/profile_images/453679763366739968/tJesiNyR_normal.jpeg"
  },
  {
      "id_str": "121626258",
      "name": "Rob Lowe",
      "screen_name": "RobLowe",
      "location": "",
      "profile_image_url": "http://pbs.twimg.com/profile_images/1062425324804341761/5adEiFFJ_normal.jpg"
  },
  {
      "id_str": "72158278",
      "name": "Rob Paulsen",
      "screen_name": "yakkopinky",
      "location": "Don't just tolerate. EMBRACE.",
      "profile_image_url": "http://pbs.twimg.com/profile_images/1111122156467843072/sacEtPru_normal.jpg"
  },
  {
      "id_str": "17853760",
      "name": "rob corddry",
      "screen_name": "robcorddry",
      "location": "In my head",
      "profile_image_url": "http://pbs.twimg.com/profile_images/805103738826305536/kDJpedpV_normal.jpg"
  },
  {
      "id_str": "22540123",
      "name": "Rob Thomas",
      "screen_name": "ThisIsRobThomas",
      "location": "new york",
      "profile_image_url": "http://pbs.twimg.com/profile_images/1095186612437188609/zQCnsPPe_normal.jpg"
  },
  {
      "id_str": "26604904",
      "name": "Rob Riggle",
      "screen_name": "RobRiggle",
      "location": "Los Angeles",
      "profile_image_url": "http://pbs.twimg.com/profile_images/458608933448716288/QbeykYCn_normal.jpeg"
  },
  {
      "id_str": "102632870",
      "name": "Rob Swire",
      "screen_name": "rob_swire",
      "location": "London, UK",
      "profile_image_url": "http://pbs.twimg.com/profile_images/1102902828383768579/kNEFxpSq_normal.jpg"
  },
  {
      "id_str": "43469093",
      "name": "Rob Zombie",
      "screen_name": "RobZombie",
      "location": "Everywhere",
      "profile_image_url": "http://pbs.twimg.com/profile_images/3312475681/2c33adb8a9fcea0da8fe72fb79d24b3a_normal.jpeg"
  },
  {
      "id_str": "22084427",
      "name": "rob delaney",
      "screen_name": "robdelaney",
      "location": "London, England",
      "profile_image_url": "http://pbs.twimg.com/profile_images/1062264728804823045/mjWindTf_normal.jpg"
  },
  {
      "id_str": "27989078",
      "name": "ROBERT KARDASHIAN",
      "screen_name": "robkardashian",
      "location": "",
      "profile_image_url": "http://pbs.twimg.com/profile_images/999794589631373317/BZHyJy_Z_normal.jpg"
  },
  {
      "id_str": "143922679",
      "name": "Rob Thomas",
      "screen_name": "RobThomas",
      "location": "Hollywood, Los Angeles",
      "profile_image_url": "http://pbs.twimg.com/profile_images/1095903943635292160/2hqey_HV_normal.png"
  },
  {
      "id_str": "238247044",
      "name": "Boston Rob",
      "screen_name": "BostonRob",
      "location": "Traveling the world",
      "profile_image_url": "http://pbs.twimg.com/profile_images/1171115323023667207/VFXVVW9H_normal.jpg"
  },
  {
      "id_str": "32729193",
      "name": "Rob Van Dam",
      "screen_name": "TherealRVD",
      "location": "Sunny California",
      "profile_image_url": "http://pbs.twimg.com/profile_images/1092594119774355457/1vDMKqFk_normal.jpg"
  },
  {
      "id_str": "19668592",
      "name": "Rob SheriDAMNED \ud83d\udc80\ud83d\udd25",
      "screen_name": "rob_sheridan",
      "location": "Tacoma, WA",
      "profile_image_url": "http://pbs.twimg.com/profile_images/1049495754601975808/H9wQRT7v_normal.jpg"
  },
  {
      "id_str": "19111767",
      "name": "Rob Brydon",
      "screen_name": "RobBrydon",
      "location": "London",
      "profile_image_url": "http://pbs.twimg.com/profile_images/1016053395071930369/iriFMPnd_normal.jpg"
  },
  {
      "id_str": "35366292",
      "name": "rob $tone.",
      "screen_name": "youngrobstone",
      "location": "Lemon Grove, CA",
      "profile_image_url": "http://pbs.twimg.com/profile_images/1117736901996244992/LcF0L4jD_normal.jpg"
  },
  {
      "id_str": "2612307559",
      "name": "Rob Portman",
      "screen_name": "robportman",
      "location": "United States",
      "profile_image_url": "http://pbs.twimg.com/profile_images/529059743135191040/pON-Ej9B_normal.jpeg"
  },
  {
      "id_str": "753612101910945793",
      "name": "Rob Holding",
      "screen_name": "RobHolding95",
      "location": "London, England",
      "profile_image_url": "http://pbs.twimg.com/profile_images/1121093758601371648/6rLSL934_normal.jpg"
  }
];

  constructor() { 
    
  }
}
