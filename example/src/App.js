import React, { Component } from 'react'
import { Tabs, Tab } from 'reactjs-tab'

import 'reactjs-tab/tab.css'

export default class App extends Component {
  render() {
    return (
      <div
        style={{
          width: 600,
          margin: 'auto',
          padding: 15,
          backgroundColor: '#FFF',
          boxShadow: `0 2px 2px rgba(0,0,0,.2)`,
          marginTop: 45,
        }}
      >
        <Tabs>
          <Tab name="Mario">
            <p>
              <b>Mario</b> (<i>Japanese: マリオ Hepburn: Mario, [ma.ɾʲi.o]</i>)
              (<i>English: /ˈmɑːrioʊ/; Italian: [ˈmaːrjo]</i>) is a fictional
              character in the Mario video game franchise, owned by Nintendo and
              created by Japanese video game designer Shigeru Miyamoto. Serving
              as the company's mascot and the eponymous protagonist of the
              series, Mario has appeared in over 200 video games since his
              creation. Depicted as a short, pudgy, Italian plumber who resides
              in the Mushroom Kingdom, his adventures generally center upon
              rescuing Princess Peach from the Koopa villain Bowser. His younger
              brother and sidekick is Luigi.
            </p>
            <p>
              Source:{' '}
              <a href="https://en.wikipedia.org/wiki/Mario" target="_blank">
                Wikipedia
              </a>
            </p>
          </Tab>
          <Tab name="Peach">
            <p>
              <b>Princess Peach</b> (<i>
                Japanese: ピーチ姫 Hepburn: Pīchi-hime, [piː.tɕi̥ çi̥.me]
              </i>) is a character in Nintendo's Mario franchise. Originally
              created by Shigeru Miyamoto, Peach is the princess of the
              fictional Mushroom Kingdom, which is constantly under attack by
              Bowser. She often plays the damsel in distress role within the
              series and is the lead female. She is often portrayed as Mario's
              love interest and has appeared in Super Princess Peach, where she
              is the main playable character.
            </p>
            <p>
              Source:{' '}
              <a
                href="https://en.wikipedia.org/wiki/Princess_Peach"
                target="_blank"
              >
                Wikipedia
              </a>
            </p>
          </Tab>
          <Tab name="Yoshi">
            <p>
              <b>Yoshi</b> (<i>ヨッシー Yosshī, [joɕ.ɕiː]</i>) (<i>
                English: /ˈjoʊʃi/ or /ˈjɒʃi/
              </i>), once romanized as Yossy, is a fictional anthropomorphic
              dinosaur who appears in video games published by Nintendo. Yoshi
              debuted in Super Mario World (1990) on the Super Nintendo
              Entertainment System as Mario and Luigi's sidekick. Yoshi later
              starred in platform and puzzle games, including Super Mario World
              2: Yoshi's Island, Yoshi's Story and Yoshi's Woolly World. Yoshi
              also appears in many of the Mario spin-off games, including Mario
              Party and Mario Kart, various Mario sports games, and Nintendo's
              crossover fighting game series Super Smash Bros. Yoshi belongs to
              the species of the same name, which is characterized by their
              variety of colors.
            </p>
            <p>
              Source:{' '}
              <a href="https://en.wikipedia.org/wiki/Yoshi" target="_blank">
                Wikipedia
              </a>
            </p>
          </Tab>
        </Tabs>
      </div>
    )
  }
}
