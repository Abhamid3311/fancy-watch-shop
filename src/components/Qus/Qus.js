import React from 'react';

const Qus = () => {
    return (
        <div>
            <div>
                <h1>How react works?</h1>
                <p>React is a JavaScript library that creates user interfaces. in a predictable and efficient way using declarative code. we can use it to help build single page applications and mobile apps, or to build complex apps if you utilise it with other libraries.</p>
                <p>It is Component base library. we can write code and find code easily by component and most importantly we np need to re-write code again and again.In a declarative UI, developers aren't in charge of changing the UI when something happens. we don't have to worry about hiding or showing divs, as we would with a code-heavy imperative UI. We only have to worry about receiving a specific app state — or, a specific screen displaying specific information at any one time — and rendering it in the UI.</p>
            </div>
            <div>
                <h1>Differenc between Props and State?</h1>
                <p>Props are used to pass data from one component to another. by this props we can sent data,function,eventHandler etc. most important thing is Props is like water it is one directional method. we can only send it parent component to child component.</p>
                <p>
                    The state is a local data storage that is local to the component only and cannot be passed to other components. state change can be asynchoronous. it can be modified by using this.state. state code are called state full component.
                </p>

            </div>
        </div>
    );
};

export default Qus;