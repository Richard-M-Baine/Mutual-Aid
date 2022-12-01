import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './about.css'

function About(){

    return(
        <div className='aboutmutualaidoutdiv'>
        <h1 className='aboutheaderone'>What is Mutual Aid?</h1>
        <div className='intropartaboutdiv'>
        <h3 className='headerthreeabout'>We are going to talk about biology for a bit.</h3>
        <p className='paragraphaboutdiv1'> Evolution is normally described as being “the survival of the fittest.”  This quote was often used at the turn of the 19th century to describe the behavior of people and nation states.  Nations that were “weak” would naturally be preyed upon by more powerful nations.  They were not strong enough.  Ditto for the poor being preyed upon by the wealthy and powerful.  You can understand how this was used to justify both crushing the poor in the country and imperialism outside of it.  Thus we got a sociological theory called Social Darwinism.  </p>
        <p className='paragraphaboutdiv1'> Perhaps, however, cooperation is more beneficial compared to competition?  Peter Kropotkin, a naturalist in what was then Czarist Russia, popularized this concept.  Let’s go back to the example of the penguins on the home page.  They would surely freeze to death if left alone.  They just don’t huddle together for warmth but they take turns on the outside where their back is exposed to the cold and wind.  Humans commit horrific atrocities against each other but also at times care for the weak and less fortunate.  </p>
        <p className='paragraphaboutdiv1'> His seminal book on this topic, Mutual Aid: A Factor In Evolution, was based on observing both wildlife and tribal communities in Siberia.  Birds who stayed put for the winter would have to compete over little food.  For this reason the majority migrated to warmer climates.  During this process they would cooperate while flying.  Taking turns in front of a V “formation” the birds in the rear could rest by drafting.  The same process as in automobile racing or competitive cycling.  </p>
        
        <div className='intropartaboutdiv'>
            <h3 className='aboutheadertwo'>So is this another charity?</h3>
            <p className='paragraphaboutdiv1'>Kropotkin later became what was later known as an Anarchist.  A belief that differs from communism in that it believes that power disparities, both government and corporate based, need to be flattened.  Many charitable organizations have chains of command just as elaborate as “for profit” corporations.  The ones on the top naturally receive the most compensation and perks.  They also have a significant role in playing who deserves and who do not deserve assistance.  You can understand that when it comes to housing, food, or financial assistance their own personal opinions can outplay any objective reasoning.     </p>
            <p className='paragraphaboutdiv1'>Mutual aid thus borrows the term from Kropotkin but also embraces his anarchist credentials.  Instead of a charity influencing who deserves, and who doesn’t deserve assistance, mutual aid believes in the concept of “people directly helping people.”  A classic example is Food not Bombs, a loosely based federation of independent pop-up food pantries.  Anyone can volunteer and anyone can receive food.  Sikhism in India, and Sufism, have a similar process called Langar.  Compared to charitable organizations decisions are communal and the scope is local.      </p>
            <p className='paragraphaboutdiv1'>Rationalism dictates that charitable organizations exist and will continue to exist for the indefinite future.  The creator of this site has worked in the non-profit industry his entire professional career.  Thus up to date listings can enable individuals to locate services in their community.  The current listings can easily be transformed into a wiki style format enabling up to date information to be presented and edited at will.       </p>
        </div>

        
        </div>



        </div>
    )
}

export default About