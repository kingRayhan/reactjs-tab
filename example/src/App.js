import React, { Component } from 'react'

import { Tabs, Tab } from 'reactjs-tab'

export default class App extends Component {
  render() {
    return (
      <Tabs>
        <Tab name="Mario">
          Mario (Japanese: マリオ Hepburn: Mario, [ma.ɾʲi.o]) (English:
          /ˈmɑːrioʊ/; Italian: [ˈmaːrjo]) is a fictional character in the Mario
          video game franchise, owned by Nintendo and created by Japanese video
          game designer Shigeru Miyamoto. Serving as the company's mascot and
          the eponymous protagonist of the series, Mario has appeared in over
          200 video games since his creation. Depicted as a short, pudgy,
          Italian plumber who resides in the Mushroom Kingdom, his adventures
          generally center upon rescuing Princess Peach from the Koopa villain
          Bowser. His younger brother and sidekick is Luigi. Source: Wikipedia
        </Tab>
        <Tab name="Peach">
          Princess Peach (Japanese: ピーチ姫 Hepburn: Pīchi-hime, [piː.tɕi̥
          çi̥.me]) is a character in Nintendo's Mario franchise. Originally
          created by Shigeru Miyamoto, Peach is the princess of the fictional
          Mushroom Kingdom, which is constantly under attack by Bowser. She
          often plays the damsel in distress role within the series and is the
          lead female. She is often portrayed as Mario's love interest and has
          appeared in Super Princess Peach, where she is the main playable
          character.
        </Tab>
      </Tabs>
    )
  }
}
