const messageForm = document.getElementById("message-form");
const messageSent = document.getElementById("message-sent");
const sendAgainBtn = document.querySelector(".send-again-btn");

messageForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const formData = new FormData(messageForm);

    try {
        const response = await fetch(messageForm.action, {
            method: "POST",
            body: formData,
            headers: {
                Accept: "application/json"
            }
        });

        if (response.ok) {
            messageForm.style.display = "none";
            messageSent.style.display = "block";
            messageForm.reset();
        } else {
            alert("Something went wrong. Please try again.");
        }

    } catch (error) {
        alert("Something went wrong. Please try again.");
    }
});

sendAgainBtn.addEventListener("click", function () {
    messageSent.style.display = "none";
    messageForm.style.display = "block";
});

const messageCards = document.querySelector(".message-list");
const openedLetter = document.getElementById("opened-letter");
const letterTitle = document.getElementById("letter-title");
const letterContent = document.getElementById("letter-content");

const letters = {
    1: {
        title: "A Little Reminder",
        message: `
            <p>Helloo,
            just a reminder lang.
            Na always give your self a time para mag pahinga, wag mo e pressure ang sarili sa mga school works,
            at kapag may mga bagay na nahihirapan ka o madami kang gagawin sabihan mo lang ako, tutulongan kita.
            </p>

            <p>I always be thankfull sa mga bagay na ginawa mo para sakin at para sa atin, i know loving me is hard pero salamat dahil tinaggap mo ako ng buo, subra kana sa hinihilig ko at sana malaman mo na subrang halaga mo para sa akin, if ever man ma rerecarnate tayo gugustohing ko hanapin ka at piliin, walang saysay ang buhay ko kapag walang Raynalyn, gusto ko nalng lagi nasa tabi mo kasi alam ko na mararamdaman ko ang init ng isang tunay na pagmamahal.</p>

            <p>And last i always pray for your safety and guidance at ang paghihiling rin sa Diyos na sana ikaw na. Isipin mo lang na walang araw na hinde kita mamahalin at sana kapag tumatagal na tayo sana mahalin mo ako ng mas malalim, at totoo. I always gratefull for having you.
        `
    },

    2: {
        title: "Things I Don't Say Enough",
        message: `
            <p>There are probably a lot of things I don't say often, pero I hope you know that I appreciate you more than you realize.

            <p>I appreciate the little things about you, yung way mo makipag usap, yung mga random moments, and even the simple things you probably don't think matter that much.</p>

            <p>Hindi naman kailangan sabihin palagi, pero I hope you know na you're someone worth appreciating. And even on ordinary days, you can still make things feel a little better just by being yourself.</p>

            <p>So ayun... baka hindi ko lang nasasabi enough, pero thank you for being you. </p>
        `
    },

    3: {title: "You Might Not Know This",
        message: `
            <p>You might not know this, but you have more impact on the people around you than you probably realize.</p>

            <p>Sometimes, the things you do without thinking about them can mean a lot to someone else. A simple conversation, a random joke, or even just being there can make someone's day a little better.</p>

            <p>So if you ever wonder if you're appreciated, I hope this reminds you that you are. You don't have to do something amazing all the time to be worth appreciating.</p>

            <p>Just being yourself is already something worth remembering.</p>
     
            <p> Lovee you allottsss :>></p>
            `
        
    },

    4: {title: "Whatever Comes Next",
        message: `
            <p> I don't know exactly what the future has waiting for us, and honestly, maybe that's what makes it exciting
            at the same time nakakatakot.
            </p>
      
            <p>Marami pa tayong hindi alam. There will probably be good days, bad days, unexpected changes, and things that we never planned for. Maybe magkakaroon tayo ng moments na magiging mahirap, and maybe there will be times na hindi natin maintindihan ang isa't isa pero sana kung dumaan man ang araw nayun sana hinde ang pag alis ang sulosyon para doon, sana kahit nahihirapan tayo sa sitwasyon nayun sana lutasin natin ng mag kasama.</p>

            <p>But I hope that whatever happens, we don't forget all the things we've been through and all the little moments that brought us here.
            We don't have to know everything about the future right now. We can just take it one step at a time and figure things out along the way.<p>

            <p>Maybe someday we'll look back at this little app and laugh at how simple everything was. Maybe we'll remember the things we dreamed about, the things we were scared of, and the things we were hoping would happen.
           
            <p>Whatever the future looks like, I hope we keep growing, keep chasing our dreams, and keep supporting each other along the way.</p>

            <p>
        <strong> I love you,</strong>
           in different universe.
             And no matter how much time passes, I hope you never forget how special you are to me<p>

             <p>yunnlangss skibidi
             </p>
            `
        
            
    }
};

function openMessage(number) {

    messageCards.style.display = "none";

    openedLetter.style.display = "block";

    letterTitle.textContent = letters[number].title;

    letterContent.innerHTML = letters[number].message;
}

function closeMessage() {

    openedLetter.style.display = "none";

    messageCards.style.display = "grid";
}
