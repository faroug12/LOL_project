import React, { Component, component } from 'react';
import { ChampList } from './components/champ-list/champ-list.component';
import './App.css';
import { SearchBar } from './components/search-bar/search-bar.component';


class App extends Component {
  
  constructor() {
    super();

    this.state = {
      champions: [
          {
          "id": 1,
          "name": "Zed",
          "nickName": "the Master of Shadows",
          "pic": 'https://c4.wallpaperflare.com/wallpaper/726/802/570/video-game-league-of-legends-zed-league-of-legends-wallpaper-preview.jpg'
          },
          {
              "id": 2,
              "name": "Talon",
              "nickName": "the Blade's Shadow",
              "pic": "https://c4.wallpaperflare.com/wallpaper/339/637/238/league-of-legends-talon-league-of-legends-wallpaper-preview.jpg"
          },
          {
              "id": 3,
              "name": "Darius",
              "nickName": "the Hand of Noxus",
              "pic": "https://c4.wallpaperflare.com/wallpaper/701/607/601/garen-league-of-legends-darius-league-of-legends-digital-art-wallpaper-preview.jpg"
          },
          {
              "id": 4,
              "name": "Viktor",
              "nickName": "the Machine Herald",
              "pic": "https://c4.wallpaperflare.com/wallpaper/662/394/392/viktor-viktor-league-of-legends-league-of-legends-riot-games-mid-league-of-legends-hd-wallpaper-preview.jpg"
          },
          {
              "id": 5,
              "name": "Katarina",
              "nickName": "the Sinister Blade",
              "pic": "https://c4.wallpaperflare.com/wallpaper/121/723/623/katarina-league-of-legends-wallpaper-preview.jpg"
          },
          {
              "id": 6,
              "name": "Lee Sin",
              "nickName": "Blind Monk",
              "pic": "https://c4.wallpaperflare.com/wallpaper/436/308/25/lee-sin-lee-sin-league-of-legends-legends-of-runeterra-video-games-hd-wallpaper-preview.jpg"
          },
          {
              "id": 7,
              "name": "Cho'Gath",
              "nickName": "the Terror of the Void",
              "pic": "https://c4.wallpaperflare.com/wallpaper/253/281/287/cho-039-gath-league-legends-wallpaper-preview.jpg"
          },
          {
              "id": 8,
              "name": "Nocturne",
              "nickName": "the Eternal Nightmare",
              "pic": "https://c4.wallpaperflare.com/wallpaper/301/332/1018/legends-of-runeterra-nocturne-shen-hd-wallpaper-preview.jpg"
          },
          {
              "id": 9,
              "name": "Miss Fortune",
              "nickName": "the Bounty Hunter",
              "pic": "https://c4.wallpaperflare.com/wallpaper/107/635/591/gun-dress-stockings-art-wallpaper-preview.jpg"
          },
          {
              "id": 10,
              "name": "Caitlyn",
              "nickName": "the Sheriff of Piltover",
              "pic": "https://c4.wallpaperflare.com/wallpaper/79/156/839/anime-league-of-legends-anime-girls-fantasy-weapon-wallpaper-preview.jpg"
          },
          {
              "id": 11,
              "name": "Leona",
              "nickName": "the Radiant Dawn",
              "pic": "https://c4.wallpaperflare.com/wallpaper/575/794/438/league-of-legends-summoner-s-rift-video-games-women-wallpaper-preview.jpg"
          },
          {
              "id": 12,
              "name": "Lux",
              "nickName": "Lady of Luminosity",
              "pic": "https://c4.wallpaperflare.com/wallpaper/715/206/572/lux-league-of-legends-wands-summoner-s-rift-league-of-legends-wallpaper-preview.jpg"
          }
      ],
     searchBar: ''
  };
}

 onSearchChange = (e) => {
     this.setState({searchBar: e.target.value})
 }

  render() {
      const { champions, searchBar } = this.state;
      const filteredChampions = champions.filter(champion =>
        champion.name.toLowerCase().includes(searchBar.toLowerCase())
        )
    return (
      <div className="App">
          <h1>Top League Champions</h1>
          <SearchBar
          placeholder="search champion" 
          onSearchChange={this.onSearchChange}
          />
      <ChampList champions={filteredChampions} />
    </div>
    )
    }
}


export default App;
