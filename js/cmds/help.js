export default function(output) {
    output.innerHTML += `\
Here Is A List Of Commands:
    <span data-color="lime">help</span> <span data-color="grey">-</span> <span data-color="yellow">Displays This.</span>
    <span data-color="lime">source</span> <span data-color="grey">-</span> <span data-color="yellow">Source Code For This Website.</span>
    <span data-color="lime">clear</span> <span data-color="grey">-</span> <span data-color="yellow">Clears The Terminal.</span>
    <span data-color="lime">whoami</span> <span data-color="grey">-</span> <span data-color="yellow">What's Your Name?</span>
    <span data-color="lime">history</span> <span data-color="grey">-</span> <span data-color="yellow">Prints Your Command History.</span>
    <span data-color="lime">hostname</span> <span data-color="grey">-</span> <span data-color="yellow">What Is This?</span>
    <span data-color="lime">ls</span> <span data-color="grey">-</span> <span data-color="yellow">Lists Files.</span>
    <span data-color="lime">pwd</span> <span data-color="grey">-</span> <span data-color="yellow">Where Are You?</span>
    <span data-color="lime">cat [...files]</span> <span data-color="grey">-</span> <span data-color="yellow">Whats In Those [...files]?</span>
    <span data-color="lime">sudo [cmd]</span> <span data-color="grey">-</span> <span data-color="yellow">Super User Do.</span>
    <span data-color="lime">echo [text]</span> <span data-color="grey">-</span> <span data-color="yellow">Prints [text].</span>
    <span data-color="lime">eval [code]</span> <span data-color="grey">-</span> <span data-color="yellow">Eval [code] As JS.</span>
    <span data-color="lime">search [query]</span> <span data-color="grey">-</span> <span data-color="yellow">Google It!</span>
`;
}
