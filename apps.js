// first chapterss functions://
function firstchapterDisplay(event){
    event.preventDefault();
    let firstbook=document.querySelector("#firstBook");
    let secondbook=document.querySelector("#secondBook");
    let thirdbook=document.querySelector("#thirdBook");
    let forthbook=document.querySelector("#forthBook");
    let fifthbook=document.querySelector("#fifthBook");
    let sixthbook=document.querySelector("#sixthBook");
    let seventhbook=document.querySelector("#seventhBook");
    let eighthbook=document.querySelector("#eighthBook");
    if (firstbook){
        let first=document.querySelector("#firstChapter");
        first.classList.toggle("display");
    }
    if (secondbook){
        let first=document.querySelector("#secondChapter");
        first.classList.toggle("display");
    }
    if (thirdbook){
        let first=document.querySelector("#thirdChapter");
        first.classList.toggle("display");
    }
    if (forthbook){
        let first=document.querySelector("#forthChapter");
        first.classList.toggle("display");
    }
    if (fifthbook){
        let first=document.querySelector("#fifthChapter");
        first.classList.toggle("display");
    }
    if (sixthbook){
        let first=document.querySelector("#sixthChapter");
        first.classList.toggle("display");
    }
    if (seventhbook){
        let first=document.querySelector("#seventhChapter");
        first.classList.toggle("display");
    }
    if (eighthbook){
        let first=document.querySelector("#eighthChapter");
        first.classList.toggle("display");
    }
}






//////////First Book/////////
function firstBookDisplay(event){
    event.preventDefault();
    let firstbook=document.querySelector("#book");
    firstbook.innerHTML=`<div class="first-book" id="firstBook">
    <br/>
    <h1 class="firt-book-letter" id="firstH1">Anne of Green Gables</h1>
    <div class="row">
        <div class="col-9">
            <q><i>Life is worth living as long as there's a laugh in it.</i></q><br/>
            First published in 1908, L. M. Montgomery's treasured coming-of-age story opens with young, red-headed Anne Shirley being mistakenly sent to Cuthbert's Farm. Two ageing siblings, Matthew and Marilla Cuthbert decided to adopt a boy to help them work the farmland, and instead get sent Anne. When the strong-willed little girl turns up, they take pity on the orphan and decide to give her a chance. Faced with farm work and less-than-welcoming school classmates, Anne struggles to settle into her new life on Prince Edward Island. Quick-witted, vividly imaginative, and armed with a loose tongue, she disturbs the steady rhythm of the villagers' life and soon finds herself running into trouble. Despite her hot-headed stubbornness, Anne begins to make steadfast friends and classroom enemies.
            <br/>
            <button  class="firt-chapter-button" id="firtChapterButon" >First chapter</button>
            <div class="first-chapter" id="firstChapter">
            <h3>First chapter</h3>
            MRS. Rachel Lynde lived just where the Avonlea main road dipped down into a little hollow, fringed with alders and ladies' eardrops and traversed by a brook that had its source away back in the woods of the old Cuthbert place; it was reputed to be an intricate, headlong brook in its earlier course through those woods, with dark secrets of pool and cascade; but by the time it reached Lynde's Hollow it was a quiet, well-conducted little stream, for not even a brook could run past Mrs. Rachel Lynde's door without due regard for decency and decorum; it probably was conscious that Mrs. Rachel was sitting at her window, keeping a sharp eye on everything that passed, from brooks and children up, and that if she noticed anything odd or out of place she would never rest until she had ferreted out the whys and wherefores thereof.
    
    There are plenty of people in Avonlea and out of it, who can attend closely to their neighbor's business by dint of neglecting their own; but Mrs. Rachel Lynde was one of those capable creatures who can manage their own concerns and those of other folks into the bargain. She was a notable housewife; her work was always done and well done; she “ran” the Sewing Circle, helped run the Sunday-school, and was the strongest prop of the Church Aid Society and Foreign Missions Auxiliary. Yet with all this Mrs. Rachel found abundant time to sit for hours at her kitchen window, knitting “cotton warp” quilts—she had knitted sixteen of them, as Avonlea housekeepers were wont to tell in awed voices—and keeping a sharp eye on the main road that crossed the hollow and wound up the steep red hill beyond. Since Avonlea occupied a little triangular peninsula jutting out into the Gulf of St. Lawrence with water on two sides of it, anybody who went out of it or into it had to pass over that hill road and so run the unseen gauntlet of Mrs. Rachel's all-seeing eye.
    
    She was sitting there one afternoon in early June. The sun was coming in at the window warm and bright; the orchard on the slope below the house was in a bridal flush of pinky-white bloom, hummed over by a myriad of bees. Thomas Lynde—a meek little man whom Avonlea people called “Rachel Lynde's husband”—was sowing his late turnip seed on the hill field beyond the barn; and Matthew Cuthbert ought to have been sowing his on the big red brook field away over by Green Gables. Mrs. Rachel knew that he ought because she had heard him tell Peter Morrison the evening before in William J. Blair's store over at Carmody that he meant to sow his turnip seed the next afternoon. Peter had asked him, of course, for Matthew Cuthbert had never been known to volunteer information about anything in his whole life.
    
    And yet here was Matthew Cuthbert, at half-past three on the afternoon of a busy day, placidly driving over the hollow and up the hill; moreover, he wore a white collar and his best suit of clothes, which was plain proof that he was going out of Avonlea; and he had the buggy and the sorrel mare, which betokened that he was going a considerable distance. Now, where was Matthew Cuthbert going and why was he going there?
    
    Had it been any other man in Avonlea, Mrs. Rachel, deftly putting this and that together, might have given a pretty good guess as to both questions. But Matthew so rarely went from home that it must be something pressing and unusual which was taking him; he was the shyest man alive and hated to have to go among strangers or to any place where he might have to talk. Matthew, dressed up with a white collar and driving in a buggy, was something that didn't happen often. Mrs. Rachel, ponder as she might, could make nothing of it and her afternoon's enjoyment was spoiled.
    
    “I'll just step over to Green Gables after tea and find out from Marilla where he's gone and why,” the worthy woman finally concluded. “He doesn't generally go to town this time of year and he never visits; if he'd run out of turnip seed he wouldn't dress up and take the buggy to go for more; he wasn't driving fast enough to be going for a doctor. Yet something must have happened since last night to start him off. I'm clean puzzled, that's what, and I won't know a minute's peace of mind or conscience until I know what has taken Matthew Cuthbert out of Avonlea today.”
    
    Accordingly after tea Mrs. Rachel set out; she had not far to go; the big, rambling, orchard-embowered house where the Cuthberts lived was a scant quarter of a mile up the road from Lynde's Hollow. To be sure, the long lane made it a good deal further. Matthew Cuthbert's father, as shy and silent as his son after him, had got as far away as he possibly could from his fellow men without actually retreating into the woods when he founded his homestead. Green Gables was built at the furthest edge of his cleared land and there it was to this day, barely visible from the main road along which all the other Avonlea houses were so sociably situated. Mrs. Rachel Lynde did not call living in such a place living at all.
    
    “It's just staying, that's what,” she said as she stepped along the deep-rutted, grassy lane bordered with wild rose bushes. “It's no wonder Matthew and Marilla are both a little odd, living away back here by themselves. Trees aren't much company, though dear knows if they were there'd be enough of them. I'd ruther look at people. To be sure, they seem contented enough; but then, I suppose, they're used to it. A body can get used to anything, even to being hanged, as the Irishman said.”
    
    With this Mrs. Rachel stepped out of the lane into the backyard of Green Gables. Very green and neat and precise was that yard, set about on one side with great patriarchal willows and the other with prim Lombardies. Not a stray stick nor stone was to be seen, for Mrs. Rachel would have seen it if there had been. Privately she was of the opinion that Marilla Cuthbert swept that yard over as often as she swept her house. One could have eaten a meal off the ground without over-brimming the proverbial peck of dirt.
    
    Mrs. Rachel rapped smartly at the kitchen door and stepped in when bidden to do so. The kitchen at Green Gables was a cheerful apartment—or would have been cheerful if it had not been so painfully clean as to give it something of the appearance of an unused parlor. Its windows looked east and west; through the west one, looking out on the back yard, came a flood of mellow June sunlight; but the east one, whence you got a glimpse of the bloom white cherry-trees in the left orchard and nodding, slender birches down in the hollow by the brook, was greened over by a tangle of vines. Here sat Marilla Cuthbert, when she sat at all, always slightly distrustful of sunshine, which seemed to her too dancing and irresponsible a thing for a world which was meant to be taken seriously; and here she sat now, knitting, and the table behind her was laid for supper.
    
    Mrs. Rachel, before she had fairly closed the door, had taken a mental note of everything that was on that table. There were three plates laid, so that Marilla must be expecting some one home with Matthew to tea; but the dishes were everyday dishes and there was only crab-apple preserves and one kind of cake, so that the expected company could not be any particular company. Yet what of Matthew's white collar and the sorrel mare? Mrs. Rachel was getting fairly dizzy with this unusual mystery about quiet, unmysterious Green Gables.
    
    “Good evening, Rachel,” Marilla said briskly. “This is a real fine evening, isn't it? Won't you sit down? How are all your folks?”
    
    Something that for lack of any other name might be called friendship existed and always had existed between Marilla Cuthbert and Mrs. Rachel, in spite of—or perhaps because of—their dissimilarity.
    
    Marilla was a tall, thin woman, with angles and without curves; her dark hair showed some gray streaks and was always twisted up in a hard little knot behind with two wire hairpins stuck aggressively through it. She looked like a woman of narrow experience and rigid conscience, which she was; but there was a saving something about her mouth which, if it had been ever so slightly developed, might have been considered indicative of a sense of humor.
    
    “We're all pretty well,” said Mrs. Rachel. “I was kind of afraid you weren't, though, when I saw Matthew starting off today. I thought maybe he was going to the doctor's.”
    
    Marilla's lips twitched understandingly. She had expected Mrs. Rachel up; she had known that the sight of Matthew jaunting off so unaccountably would be too much for her neighbor's curiosity.
    
    “Oh, no, I'm quite well although I had a bad headache yesterday,” she said. “Matthew went to Bright River. We're getting a little boy from an orphan asylum in Nova Scotia and he's coming on the train tonight.”
    
    If Marilla had said that Matthew had gone to Bright River to meet a kangaroo from Australia Mrs. Rachel could not have been more astonished. She was actually stricken dumb for five seconds. It was unsupposable that Marilla was making fun of her, but Mrs. Rachel was almost forced to suppose it.
    
    “Are you in earnest, Marilla?” she demanded when voice returned to her.
    
    “Yes, of course,” said Marilla, as if getting boys from orphan asylums in Nova Scotia were part of the usual spring work on any well-regulated Avonlea farm instead of being an unheard of innovation.
    
    Mrs. Rachel felt that she had received a severe mental jolt. She thought in exclamation points. A boy! Marilla and Matthew Cuthbert of all people adopting a boy! From an orphan asylum! Well, the world was certainly turning upside down! She would be surprised at nothing after this! Nothing!
    
    “What on earth put such a notion into your head?” she demanded disapprovingly.
    
    This had been done without her advice being asked, and must perforce be disapproved.
    
    “Well, we've been thinking about it for some time—all winter in fact,” returned Marilla. “Mrs. Alexander Spencer was up here one day before Christmas and she said she was going to get a little girl from the asylum over in Hopeton in the spring. Her cousin lives there and Mrs. Spencer has visited here and knows all about it. So Matthew and I have talked it over off and on ever since. We thought we'd get a boy. Matthew is getting up in years, you know—he's sixty—and he isn't so spry as he once was. His heart troubles him a good deal. And you know how desperate hard it's got to be to get hired help. There's never anybody to be had but those stupid, half-grown little French boys; and as soon as you do get one broke into your ways and taught something he's up and off to the lobster canneries or the States. At first Matthew suggested getting a Home boy. But I said ‘no' flat to that. ‘They may be all right—I'm not saying they're not—but no London street Arabs for me,' I said. ‘Give me a native born at least. There'll be a risk, no matter who we get. But I'll feel easier in my mind and sleep sounder at nights if we get a born Canadian.' So in the end we decided to ask Mrs. Spencer to pick us out one when she went over to get her little girl. We heard last week she was going, so we sent her word by Richard Spencer's folks at Carmody to bring us a smart, likely boy of about ten or eleven. We decided that would be the best age—old enough to be of some use in doing chores right off and young enough to be trained up proper. We mean to give him a good home and schooling. We had a telegram from Mrs. Alexander Spencer today—the mail-man brought it from the station—saying they were coming on the five-thirty train tonight. So Matthew went to Bright River to meet him. Mrs. Spencer will drop him off there. Of course she goes on to White Sands station herself.”
    
    Mrs. Rachel prided herself on always speaking her mind; she proceeded to speak it now, having adjusted her mental attitude to this amazing piece of news.
    
    “Well, Marilla, I'll just tell you plain that I think you're doing a mighty foolish thing—a risky thing, that's what. You don't know what you're getting. You're bringing a strange child into your house and home and you don't know a single thing about him nor what his disposition is like nor what sort of parents he had nor how he's likely to turn out. Why, it was only last week I read in the paper how a man and his wife up west of the Island took a boy out of an orphan asylum and he set fire to the house at night—set it on purpose, Marilla—and nearly burnt them to a crisp in their beds. And I know another case where an adopted boy used to suck the eggs—they couldn't break him of it. If you had asked my advice in the matter—which you didn't do, Marilla—I'd have said for mercy's sake not to think of such a thing, that's what.”
    
    This Job's comforting seemed neither to offend nor to alarm Marilla. She knitted steadily on.
    
    “I don't deny there's something in what you say, Rachel. I've had some qualms myself. But Matthew was terrible set on it. I could see that, so I gave in. It's so seldom Matthew sets his mind on anything that when he does I always feel it's my duty to give in. And as for the risk, there's risks in pretty near everything a body does in this world. There's risks in people's having children of their own if it comes to that—they don't always turn out well. And then Nova Scotia is right close to the Island. It isn't as if we were getting him from England or the States. He can't be much different from ourselves.”
    
    “Well, I hope it will turn out all right,” said Mrs. Rachel in a tone that plainly indicated her painful doubts. “Only don't say I didn't warn you if he burns Green Gables down or puts strychnine in the well—I heard of a case over in New Brunswick where an orphan asylum child did that and the whole family died in fearful agonies. Only, it was a girl in that instance.”
    
    “Well, we're not getting a girl,” said Marilla, as if poisoning wells were a purely feminine accomplishment and not to be dreaded in the case of a boy. “I'd never dream of taking a girl to bring up. I wonder at Mrs. Alexander Spencer for doing it. But there, she wouldn't shrink from adopting a whole orphan asylum if she took it into her head.”
    
    Mrs. Rachel would have liked to stay until Matthew came home with his imported orphan. But reflecting that it would be a good two hours at least before his arrival she concluded to go up the road to Robert Bell's and tell the news. It would certainly make a sensation second to none, and Mrs. Rachel dearly loved to make a sensation. So she took herself away, somewhat to Marilla's relief, for the latter felt her doubts and fears reviving under the influence of Mrs. Rachel's pessimism.
    
    “Well, of all things that ever were or will be!” ejaculated Mrs. Rachel when she was safely out in the lane. “It does really seem as if I must be dreaming. Well, I'm sorry for that poor young one and no mistake. Matthew and Marilla don't know anything about children and they'll expect him to be wiser and steadier that his own grandfather, if so be's he ever had a grandfather, which is doubtful. It seems uncanny to think of a child at Green Gables somehow; there's never been one there, for Matthew and Marilla were grown up when the new house was built—if they ever were children, which is hard to believe when one looks at them. I wouldn't be in that orphan's shoes for anything. My, but I pity him, that's what.”
    
    So said Mrs. Rachel to the wild rose bushes out of the fulness of her heart; but if she could have seen the child who was waiting patiently at the Bright River station at that very moment her pity would have been still deeper and more profound.
            </div>

        </div>
        <div class="col-3">
            <img src="1-1.jpg" width="140px">
            <br/>
            <div class="author">
                <i><strong>Author:</strong> Lucy Maud Montgomery
                    <br/>
                   <strong> Illustrator:</strong>  A. and W. A. J. Claus
                    <br/>
                    <strong>Country:</strong>  Canada 
                    <br/>
                    <strong>Language:</strong> English
                    <br/>
                    <strong>Genre:</strong> Novel
                    <br/>
                    <strong>Published:</strong> June 13, 1908
                </i>
            </div>    
        </div>
    </div>
   </div>`;
}


/////////////////Second book////////////

function secondBookDisplay(event){
    event.preventDefault();
    let secondBook=document.querySelector("#book");
    secondBook.innerHTML=`
    <div class="second-book" id="secondBook">
    <br/>
                
    <h1 class="second-book-letter">Anne of Avonlea</h1>
    <div class="row">
        <div class="col-9">
            <q><i>That is one good thing about this world...there are always sure to be more springs.</i></q><br/>
            Following Anne of Green Gables (1908), the book covers the second chapter in the life of Anne Shirley. This book follows Anne from the age of 16 to 18, during the two years that she teaches at Avonlea school. It includes many of the characters from Anne of Green Gables, as well as new ones like Mr. Harrison, Miss Lavendar Lewis, Paul Irving, and the twins Dora and Davy.
            <br/>
            <button  class="second-chapter-button" id="secondChapterButon" >First chapter</button>
            <div class="second-chapter" id="secondChapter">
                <h3>First chapter</h3>
                <div>An Irate Neighbor
                A tall, slim girl, “half-past sixteen,” with serious gray eyes and hair which her friends called auburn, had sat down on the broad red sandstone doorstep of a Prince Edward Island farmhouse one ripe afternoon in August, firmly resolved to construe so many lines of Virgil.
                
                But an August afternoon, with blue hazes scarfing the harvest slopes, little winds whispering elfishly in the poplars, and a dancing slendor of red poppies outflaming against the dark coppice of young firs in a corner of the cherry orchard, was fitter for dreams than dead languages. The Virgil soon slipped unheeded to the ground, and Anne, her chin propped on her clasped hands, and her eyes on the splendid mass of fluffy clouds that were heaping up just over Mr. J. A. Harrison's house like a great white mountain, was far away in a delicious world where a certain schoolteacher was doing a wonderful work, shaping the destinies of future statesmen, and inspiring youthful minds and hearts with high and lofty ambitions.
                
                To be sure, if you came down to harsh facts . . . which, it must be confessed, Anne seldom did until she had to . . . it did not seem likely that there was much promising material for celebrities in Avonlea school; but you could never tell what might happen if a teacher used her influence for good. Anne had certain rose-tinted ideals of what a teacher might accomplish if she only went the right way about it; and she was in the midst of a delightful scene, forty years hence, with a famous personage . . . just exactly what he was to be famous for was left in convenient haziness, but Anne thought it would be rather nice to have him a college president or a Canadian premier . . . bowing low over her wrinkled hand and assuring her that it was she who had first kindled his ambition, and that all his success in life was due to the lessons she had instilled so long ago in Avonlea school. This pleasant vision was shattered by a most unpleasant interruption.
                
                A demure little Jersey cow came scuttling down the lane and five seconds later Mr. Harrison arrived . . . if “arrived” be not too mild a term to describe the manner of his irruption into the yard.
                
                He bounced over the fence without waiting to open the gate, and angrily confronted astonished Anne, who had risen to her feet and stood looking at him in some bewilderment. Mr. Harrison was their new righthand neighbor and she had never met him before, although she had seen him once or twice.
                
                In early April, before Anne had come home from Queen's, Mr. Robert Bell, whose farm adjoined the Cuthbert place on the west, had sold out and moved to Charlottetown. His farm had been bought by a certain Mr. J. A. Harrison, whose name, and the fact that he was a New Brunswick man, were all that was known about him. But before he had been a month in Avonlea he had won the reputation of being an odd person . . . “a crank,” Mrs. Rachel Lynde said. Mrs. Rachel was an outspoken lady, as those of you who may have already made her acquaintance will remember. Mr. Harrison was certainly different from other people . . . and that is the essential characteristic of a crank, as everybody knows.
                
                In the first place he kept house for himself and had publicly stated that he wanted no fools of women around his diggings. Feminine Avonlea took its revenge by the gruesome tales it related about his house-keeping and cooking. He had hired little John Henry Carter of White Sands and John Henry started the stories. For one thing, there was never any stated time for meals in the Harrison establishment. Mr. Harrison “got a bite” when he felt hungry, and if John Henry were around at the time, he came in for a share, but if he were not, he had to wait until Mr. Harrison's next hungry spell. John Henry mournfully averred that he would have starved to death if it wasn't that he got home on Sundays and got a good filling up, and that his mother always gave him a basket of “grub” to take back with him on Monday mornings.
                
                As for washing dishes, Mr. Harrison never made any pretence of doing it unless a rainy Sunday came. Then he went to work and washed them all at once in the rainwater hogshead, and left them to drain dry.
                
                Again, Mr. Harrison was “close.” When he was asked to subscribe to the Rev. Mr. Allan's salary he said he'd wait and see how many dollars' worth of good he got out of his preaching first . . . he didn't believe in buying a pig in a poke. And when Mrs. Lynde went to ask for a contribution to missions . . . and incidentally to see the inside of the house . . . he told her there were more heathens among the old woman gossips in Avonlea than anywhere else he knew of, and he'd cheerfully contribute to a mission for Christianizing them if she'd undertake it. Mrs. Rachel got herself away and said it was a mercy poor Mrs. Robert Bell was safe in her grave, for it would have broken her heart to see the state of her house in which she used to take so much pride.
                
                “Why, she scrubbed the kitchen floor every second day,” Mrs. Lynde told Marilla Cuthbert indignantly, “and if you could see it now! I had to hold up my skirts as I walked across it.”
                
                Finally, Mr. Harrison kept a parrot called Ginger. Nobody in Avonlea had ever kept a parrot before; consequently that proceeding was considered barely respectable. And such a parrot! If you took John Henry Carter's word for it, never was such an unholy bird. It swore terribly. Mrs. Carter would have taken John Henry away at once if she had been sure she could get another place for him. Besides, Ginger had bitten a piece right out of the back of John Henry's neck one day when he had stooped down too near the cage. Mrs. Carter showed everybody the mark when the luckless John Henry went home on Sundays.
                
                All these things flashed through Anne's mind as Mr. Harrison stood, quite speechless with wrath apparently, before her. In his most amiable mood Mr. Harrison could not have been considered a handsome man; he was short and fat and bald; and now, with his round face purple with rage and his prominent blue eyes almost sticking out of his head, Anne thought he was really the ugliest person she had ever seen.
                
                All at once Mr. Harrison found his voice.
                
                “I'm not going to put up with this,” he spluttered, “not a day longer, do you hear, miss. Bless my soul, this is the third time, miss . . . the third time! Patience has ceased to be a virtue, miss. I warned your aunt the last time not to let it occur again . . . and she's let it . . . she's done it . . . what does she mean by it, that is what I want to know. That is what I'm here about, miss.”
                
                “Will you explain what the trouble is?” asked Anne, in her most dignified manner. She had been practicing it considerably of late to have it in good working order when school began; but it had no apparent effect on the irate J. A. Harrison.
                
                “Trouble, is it? Bless my soul, trouble enough, I should think. The trouble is, miss, that I found that Jersey cow of your aunt's in my oats again, not half an hour ago. The third time, mark you. I found her in last Tuesday and I found her in yesterday. I came here and told your aunt not to let it occur again. She has let it occur again. Where's your aunt, miss? I just want to see her for a minute and give her a piece of my mind . . . a piece of J. A. Harrison's mind, miss.”
                
                “If you mean Miss Marilla Cuthbert, she is not my aunt, and she has gone down to East Grafton to see a distant relative of hers who is very ill,” said Anne, with due increase of dignity at every word. “I am very sorry that my cow should have broken into your oats . . . she is my cow and not Miss Cuthbert's . . . Matthew gave her to me three years ago when she was a little calf and he bought her from Mr. Bell.”
                
                “Sorry, miss! Sorry isn't going to help matters any. You'd better go and look at the havoc that animal has made in my oats . . . trampled them from center to circumference, miss.”
                
                “I am very sorry,” repeated Anne firmly, “but perhaps if you kept your fences in better repair Dolly might not have broken in. It is your part of the line fence that separates your oatfield from our pasture and I noticed the other day that it was not in very good condition.”
                
                “My fence is all right,” snapped Mr. Harrison, angrier than ever at this carrying of the war into the enemy's country. “The jail fence couldn't keep a demon of a cow like that out. And I can tell you, you redheaded snippet, that if the cow is yours, as you say, you'd be better employed in watching her out of other people's grain than in sitting round reading yellow-covered novels,” . . . with a scathing glance at the innocent tan-colored Virgil by Anne's feet.
                
                Something at that moment was red besides Anne's hair . . . which had always been a tender point with her.
                
                “I'd rather have red hair than none at all, except a little fringe round my ears,” she flashed.
                
                The shot told, for Mr. Harrison was really very sensitive about his bald head. His anger choked him up again and he could only glare speechlessly at Anne, who recovered her temper and followed up her advantage.
                
                “I can make allowance for you, Mr. Harrison, because I have an imagination. I can easily imagine how very trying it must be to find a cow in your oats and I shall not cherish any hard feelings against you for the things you've said. I promise you that Dolly shall never break into your oats again. I give you my word of honor on that point.”
                
                “Well, mind you she doesn't,” muttered Mr. Harrison in a somewhat subdued tone; but he stamped off angrily enough and Anne heard him growling to himself until he was out of earshot.
                
                Grievously disturbed in mind, Anne marched across the yard and shut the naughty Jersey up in the milking pen.
                
                “She can't possibly get out of that unless she tears the fence down,” she reflected. “She looks pretty quiet now. I daresay she has sickened herself on those oats. I wish I'd sold her to Mr. Shearer when he wanted her last week, but I thought it was just as well to wait until we had the auction of the stock and let them all go together. I believe it is true about Mr. Harrison being a crank. Certainly there's nothing of the kindred spirit about him.”
                
                Anne had always a weather eye open for kindred spirits.
                
                Marilla Cuthbert was driving into the yard as Anne returned from the house, and the latter flew to get tea ready. They discussed the matter at the tea table.
                
                “I'll be glad when the auction is over,” said Marilla. “It is too much responsibility having so much stock about the place and nobody but that unreliable Martin to look after them. He has never come back yet and he promised that he would certainly be back last night if I'd give him the day off to go to his aunt's funeral. I don't know how many aunts he has got, I am sure. That's the fourth that's died since he hired here a year ago. I'll be more than thankful when the crop is in and Mr. Barry takes over the farm. We'll have to keep Dolly shut up in the pen till Martin comes, for she must be put in the back pasture and the fences there have to be fixed. I declare, it is a world of trouble, as Rachel says. Here's poor Mary Keith dying and what is to become of those two children of hers is more than I know. She has a brother in British Columbia and she has written to him about them, but she hasn't heard from him yet.”
                
                “What are the children like? How old are they?”
                
                “Six past . . . they're twins.”
                
                “Oh, I've always been especially interested in twins ever since Mrs. Hammond had so many,” said Anne eagerly. “Are they pretty?”
                
                “Goodness, you couldn't tell . . . they were too dirty. Davy had been out making mud pies and Dora went out to call him in. Davy pushed her headfirst into the biggest pie and then, because she cried, he got into it himself and wallowed in it to show her it was nothing to cry about. Mary said Dora was really a very good child but that Davy was full of mischief. He has never had any bringing up you might say. His father died when he was a baby and Mary has been sick almost ever since.”
                
                “I'm always sorry for children that have no bringing up,” said Anne soberly. “You know I hadn't any till you took me in hand. I hope their uncle will look after them. Just what relation is Mrs. Keith to you?”
                
                “Mary? None in the world. It was her husband . . . he was our third cousin. There's Mrs. Lynde coming through the yard. I thought she'd be up to hear about Mary.”
                
                “Don't tell her about Mr. Harrison and the cow,” implored Anne.
                
                Marilla promised; but the promise was quite unnecessary, for Mrs. Lynde was no sooner fairly seated than she said,
                
                “I saw Mr. Harrison chasing your Jersey out of his oats today when I was coming home from Carmody. I thought he looked pretty mad. Did he make much of a rumpus?”
                
                Anne and Marilla furtively exchanged amused smiles. Few things in Avonlea ever escaped Mrs. Lynde. It was only that morning Anne had said,
                
                “If you went to your own room at midnight, locked the door, pulled down the blind, and sneezed, Mrs. Lynde would ask you the next day how your cold was!”
                
                “I believe he did,” admitted Marilla. “I was away. He gave Anne a piece of his mind.”
                
                “I think he is a very disagreeable man,” said Anne, with a resentful toss of her ruddy head.
                
                “You never said a truer word,” said Mrs. Rachel solemnly. “I knew there'd be trouble when Robert Bell sold his place to a New Brunswick man, that's what. I don't know what Avonlea is coming to, with so many strange people rushing into it. It'll soon not be safe to go to sleep in our beds.”
                
                “Why, what other strangers are coming in?” asked Marilla.
                
                “Haven't you heard? Well, there's a family of Donnells, for one thing. They've rented Peter Sloane's old house. Peter has hired the man to run his mill. They belong down east and nobody knows anything about them. Then that shiftless Timothy Cotton family are going to move up from White Sands and they'll simply be a burden on the public. He is in consumption . . . when he isn't stealing . . . and his wife is a slack-twisted creature that can't turn her hand to a thing. She washes her dishes sitting down. Mrs. George Pye has taken her husband's orphan nephew, Anthony Pye. He'll be going to school to you, Anne, so you may expect trouble, that's what. And you'll have another strange pupil, too. Paul Irving is coming from the States to live with his grandmother. You remember his father, Marilla . . . Stephen Irving, him that jilted Lavendar Lewis over at Grafton?”
                
                “I don't think he jilted her. There was a quarrel . . . I suppose there was blame on both sides.”
                
                “Well, anyway, he didn't marry her, and she's been as queer as possible ever since, they say . . . living all by herself in that little stone house she calls Echo Lodge. Stephen went off to the States and went into business with his uncle and married a Yankee. He's never been home since, though his mother has been up to see him once or twice. His wife died two years ago and he's sending the boy home to his mother for a spell. He's ten years old and I don't know if he'll be a very desirable pupil. You can never tell about those Yankees.”
                
                Mrs Lynde looked upon all people who had the misfortune to be born or brought up elsewhere than in Prince Edward Island with a decided can-any-good-thing-come-out-of-Nazareth air. They might be good people, of course; but you were on the safe side in doubting it. She had a special prejudice against “Yankees.” Her husband had been cheated out of ten dollars by an employer for whom he had once worked in Boston and neither angels nor principalities nor powers could have convinced Mrs. Rachel that the whole United States was not responsible for it.
                
                “Avonlea school won't be the worse for a little new blood,” said Marilla drily, “and if this boy is anything like his father he'll be all right. Steve Irving was the nicest boy that was ever raised in these parts, though some people did call him proud. I should think Mrs. Irving would be very glad to have the child. She has been very lonesome since her husband died.”
                
                “Oh, the boy may be well enough, but he'll be different from Avonlea children,” said Mrs. Rachel, as if that clinched the matter. Mrs. Rachel's opinions concerning any person, place, or thing, were always warranted to wear. “What's this I hear about your going to start up a Village Improvement Society, Anne?”
                
                “I was just talking it over with some of the girls and boys at the last Debating Club,” said Anne, flushing. “They thought it would be rather nice . . . and so do Mr. and Mrs. Allan. Lots of villages have them now.”
                
                “Well, you'll get into no end of hot water if you do. Better leave it alone, Anne, that's what. People don't like being improved.”
                
                “Oh, we are not going to try to improve the people. It is Avonlea itself. There are lots of things which might be done to make it prettier. For instance, if we could coax Mr. Levi Boulter to pull down that dreadful old house on his upper farm wouldn't that be an improvement?”
                
                “It certainly would,” admitted Mrs. Rachel. “That old ruin has been an eyesore to the settlement for years. But if you Improvers can coax Levi Boulter to do anything for the public that he isn't to be paid for doing, may I be there to see and hear the process, that's what. I don't want to discourage you, Anne, for there may be something in your idea, though I suppose you did get it out of some rubbishy Yankee magazine; but you'll have your hands full with your school and I advise you as a friend not to bother with your improvements, that's what. But there, I know you'll go ahead with it if you've set your mind on it. You were always one to carry a thing through somehow.”
                
                Something about the firm outlines of Anne's lips told that Mrs. Rachel was not far astray in this estimate. Anne's heart was bent on forming the Improvement Society. Gilbert Blythe, who was to teach in White Sands but would always be home from Friday night to Monday morning, was enthusiastic about it; and most of the other folks were willing to go in for anything that meant occasional meetings and consequently some “fun.” As for what the “improvements” were to be, nobody had any very clear idea except Anne and Gilbert. They had talked them over and planned them out until an ideal Avonlea existed in their minds, if nowhere else.
                
                Mrs. Rachel had still another item of news.
                
                “They've given the Carmody school to a Priscilla Grant. Didn't you go to Queen's with a girl of that name, Anne?”
                
                “Yes, indeed. Priscilla to teach at Carmody! How perfectly lovely!” exclaimed Anne, her gray eyes lighting up until they looked like evening stars, causing Mrs. Lynde to wonder anew if she would ever get it settled to her satisfaction whether Anne Shirley were really a pretty girl or not.
            </div>
            </div>

        </div>
        <div class="col-3">
            <img src="2-2.jpg" width="140px">
            <br/>
            <div class="author">
                <i><strong>Author:</strong> Lucy Maud Montgomery
                    <br/>
                   <strong> Illustrator:</strong>  A. and W. A. J. Claus
                    <br/>
                    <strong>Country:</strong>  Canada 
                    <br/>
                    <strong>Language:</strong> English
                    <br/>
                    <strong>Genre:</strong> Novel
                    <br/>
                    <strong>Published:</strong>  1909
                </i>
            </div>    
        </div>
    </div>
    </div>
`;
}
////////////////Third book/////////////
function thirdBookDisplay(event){
    event.preventDefault();
    let thirdBook=document.querySelector("#book");
    thirdBook.innerHTML=` <div class="third-book" id="thirdBook">
    <br/>
    <h1 class="third-book-letter">Anne of the Island</h1>
    <div class="row">
        <div class="col-9">
            <q><i>We ought always to try to influence other people for good.</i></q><br/>
            Anne of the Island is the third book in the Anne of Green Gables series, written by Lucy Maud Montgomery about Anne Shirley. The plot sees Anne Shirley leave Green Gables in Avonlea, Prince Edward Island, for the first time to attend Redmond College in Kingsport, Nova Scotia.

            The book was published in 1915, after the first two books. On top of that, Anne's growth is reflected in the book's title. She finds herself recognizing Prince Edward Island as her true home when studying away from the Island, particularly when visiting the site where she was born. She has stated several times that she is not a "Bluenose", as individuals born in Nova Scotia are known, and that she is a true Islander.
            
            Anne of the Island was published in 1915, seven years after the bestselling Anne of Green Gables. In the continuing story of Anne Shirley, Anne attends Redmond College in Kingsport, where she is studying for her BA.
            <br/>
            <button  class="third-chapter-button" id="thirdChapterButon" >First chapter</button>
            <div class="third-chapter" id="thirdChapter">
                <h3>First chapter</h3>
                “Harvest is ended and summer is gone,” quoted Anne Shirley, gazing
                across the shorn fields dreamily. She and Diana Barry had been picking
                apples in the Green Gables orchard, but were now resting from their
                labors in a sunny corner, where airy fleets of thistledown drifted by
                on the wings of a wind that was still summer-sweet with the incense of
                ferns in the Haunted Wood.
                
                But everything in the landscape around them spoke of autumn. The sea
                was roaring hollowly in the distance, the fields were bare and sere,
                scarfed with golden rod, the brook valley below Green Gables overflowed
                with asters of ethereal purple, and the Lake of Shining Waters was
                blue—blue—blue; not the changeful blue of spring, nor the pale azure of
                summer, but a clear, steadfast, serene blue, as if the water were past
                all moods and tenses of emotion and had settled down to a tranquility
                unbroken by fickle dreams.
                
                “It has been a nice summer,” said Diana, twisting the new ring on her
                left hand with a smile. “And Miss Lavendar's wedding seemed to come as
                a sort of crown to it. I suppose Mr. and Mrs. Irving are on the Pacific
                coast now.”
                
                “It seems to me they have been gone long enough to go around the
                world,” sighed Anne.
                
                “I can't believe it is only a week since they were married. Everything
                has changed. Miss Lavendar and Mr. and Mrs. Allan gone—how lonely the
                manse looks with the shutters all closed! I went past it last night,
                and it made me feel as if everybody in it had died.”
                
                “We'll never get another minister as nice as Mr. Allan,” said Diana,
                with gloomy conviction. “I suppose we'll have all kinds of supplies
                this winter, and half the Sundays no preaching at all. And you and
                Gilbert gone—it will be awfully dull.”
                
                “Fred will be here,” insinuated Anne slyly.
                
                “When is Mrs. Lynde going to move up?” asked Diana, as if she had not
                heard Anne's remark.
                
                “Tomorrow. I'm glad she's coming—but it will be another change. Marilla
                and I cleared everything out of the spare room yesterday. Do you know,
                I hated to do it? Of course, it was silly—but it did seem as if we were
                committing sacrilege. That old spare room has always seemed like a
                shrine to me. When I was a child I thought it the most wonderful
                apartment in the world. You remember what a consuming desire I had to
                sleep in a spare room bed—but not the Green Gables spare room. Oh, no,
                never there! It would have been too terrible—I couldn't have slept a
                wink from awe. I never _walked_ through that room when Marilla sent me
                in on an errand—no, indeed, I tiptoed through it and held my breath, as
                if I were in church, and felt relieved when I got out of it. The
                pictures of George Whitefield and the Duke of Wellington hung there,
                one on each side of the mirror, and frowned so sternly at me all the
                time I was in, especially if I dared peep in the mirror, which was the
                only one in the house that didn't twist my face a little. I always
                wondered how Marilla dared houseclean that room. And now it's not only
                cleaned but stripped bare. George Whitefield and the Duke have been
                relegated to the upstairs hall. So passes the glory of this world,'”
                concluded Anne, with a laugh in which there was a little note of
                regret. It is never pleasant to have our old shrines desecrated, even
                when we have outgrown them.
                
                “I'll be so lonesome when you go,” moaned Diana for the hundredth time.
                “And to think you go next week!”
                
                “But we're together still,” said Anne cheerily. “We mustn't let next
                week rob us of this week's joy. I hate the thought of going myself—home
                and I are such good friends. Talk of being lonesome! It's I who should
                groan. _You'll_ be here with any number of your old friends—_and_ Fred!
                While I shall be alone among strangers, not knowing a soul!”
                
                “_Except_ Gilbert—_and_ Charlie Sloane,” said Diana, imitating Anne's
                italics and slyness.
                
                “Charlie Sloane will be a great comfort, of course,” agreed Anne
                sarcastically; whereupon both those irresponsible damsels laughed.
                Diana knew exactly what Anne thought of Charlie Sloane; but, despite
                sundry confidential talks, she did not know just what Anne thought of
                Gilbert Blythe. To be sure, Anne herself did not know that.
                
                “The boys may be boarding at the other end of Kingsport, for all I
                know,” Anne went on. “I am glad I'm going to Redmond, and I am sure I
                shall like it after a while. But for the first few weeks I know I
                won't. I shan't even have the comfort of looking forward to the weekend
                visit home, as I had when I went to Queen's. Christmas will seem like a
                thousand years away.”
                
                “Everything is changing—or going to change,” said Diana sadly. “I have
                a feeling that things will never be the same again, Anne.”
                
                “We have come to a parting of the ways, I suppose,” said Anne
                thoughtfully. “We had to come to it. Do you think, Diana, that being
                grown-up is really as nice as we used to imagine it would be when we
                were children?”
                
                “I don't know—there are _some_ nice things about it,” answered Diana,
                again caressing her ring with that little smile which always had the
                effect of making Anne feel suddenly left out and inexperienced. “But
                there are so many puzzling things, too. Sometimes I feel as if being
                grown-up just frightened me—and then I would give anything to be a
                little girl again.”
                
                “I suppose we'll get used to being grownup in time,” said Anne
                cheerfully. “There won't be so many unexpected things about it by and
                by—though, after all, I fancy it's the unexpected things that give
                spice to life. We're eighteen, Diana. In two more years we'll be
                twenty. When I was ten I thought twenty was a green old age. In no time
                you'll be a staid, middle-aged matron, and I shall be nice, old maid
                Aunt Anne, coming to visit you on vacations. You'll always keep a
                corner for me, won't you, Di darling? Not the spare room, of course—old
                maids can't aspire to spare rooms, and I shall be as 'umble as _Uriah
                Heep_, and quite content with a little over-the-porch or off-the-parlor
                cubby hole.”
                
                “What nonsense you do talk, Anne,” laughed Diana. “You'll marry
                somebody splendid and handsome and rich—and no spare room in Avonlea
                will be half gorgeous enough for you—and you'll turn up your nose at
                all the friends of your youth.”
                
                “That would be a pity; my nose is quite nice, but I fear turning it up
                would spoil it,” said Anne, patting that shapely organ. “I haven't so
                many good features that I could afford to spoil those I have; so, even
                if I should marry the King of the Cannibal Islands, I promise you I
                won't turn up my nose at you, Diana.”
                
                With another gay laugh the girls separated, Diana to return to Orchard
                Slope, Anne to walk to the Post Office. She found a letter awaiting her
                there, and when Gilbert Blythe overtook her on the bridge over the Lake
                of Shining Waters she was sparkling with the excitement of it.
                
                “Priscilla Grant is going to Redmond, too,” she exclaimed. “Isn't that
                splendid? I hoped she would, but she didn't think her father would
                consent. He has, however, and we're to board together. I feel that I
                can face an army with banners—or all the professors of Redmond in one
                fell phalanx—with a chum like Priscilla by my side.”
                
                “I think we'll like Kingsport,” said Gilbert. “It's a nice old burg,
                they tell me, and has the finest natural park in the world. I've heard
                that the scenery in it is magnificent.”
                
                “I wonder if it will be—can be—any more beautiful than this,” murmured
                Anne, looking around her with the loving, enraptured eyes of those to
                whom “home” must always be the loveliest spot in the world, no matter
                what fairer lands may lie under alien stars.
                
                They were leaning on the bridge of the old pond, drinking deep of the
                enchantment of the dusk, just at the spot where Anne had climbed from
                her sinking Dory on the day Elaine floated down to Camelot. The fine,
                empurpling dye of sunset still stained the western skies, but the moon
                was rising and the water lay like a great, silver dream in her light.
                Remembrance wove a sweet and subtle spell over the two young creatures.
                
                “You are very quiet, Anne,” said Gilbert at last.
                
                “I'm afraid to speak or move for fear all this wonderful beauty will
                vanish just like a broken silence,” breathed Anne.
                
                Gilbert suddenly laid his hand over the slender white one lying on the
                rail of the bridge. His hazel eyes deepened into darkness, his still
                boyish lips opened to say something of the dream and hope that thrilled
                his soul. But Anne snatched her hand away and turned quickly. The spell
                of the dusk was broken for her.
                
                “I must go home,” she exclaimed, with a rather overdone carelessness.
                “Marilla had a headache this afternoon, and I'm sure the twins will be
                in some dreadful mischief by this time. I really shouldn't have stayed
                away so long.”
                
                She chattered ceaselessly and inconsequently until they reached the
                Green Gables lane. Poor Gilbert hardly had a chance to get a word in
                edgewise. Anne felt rather relieved when they parted. There had been a
                new, secret self-consciousness in her heart with regard to Gilbert,
                ever since that fleeting moment of revelation in the garden of Echo
                Lodge. Something alien had intruded into the old, perfect, school-day
                comradeship—something that threatened to mar it.
                
                “I never felt glad to see Gilbert go before,” she thought,
                half-resentfully, half-sorrowfully, as she walked alone up the lane.
                “Our friendship will be spoiled if he goes on with this nonsense. It
                mustn't be spoiled—I won't let it. Oh, _why_ can't boys be just
                sensible!”
                
                Anne had an uneasy doubt that it was not strictly “sensible” that she
                should still feel on her hand the warm pressure of Gilbert's, as
                distinctly as she had felt it for the swift second his had rested
                there; and still less sensible that the sensation was far from being an
                unpleasant one—very different from that which had attended a similar
                demonstration on Charlie Sloane's part, when she had been sitting out a
                dance with him at a White Sands party three nights before. Anne
                shivered over the disagreeable recollection. But all problems connected
                with infatuated swains vanished from her mind when she entered the
                homely, unsentimental atmosphere of the Green Gables kitchen where an
                eight-year-old boy was crying grievously on the sofa.
                
                “What is the matter, Davy?” asked Anne, taking him up in her arms.
                “Where are Marilla and Dora?”
                
                “Marilla's putting Dora to bed,” sobbed Davy, “and I'm crying 'cause
                Dora fell down the outside cellar steps, heels over head, and scraped
                all the skin off her nose, and—”
                
                “Oh, well, don't cry about it, dear. Of course, you are sorry for her,
                but crying won't help her any. She'll be all right tomorrow. Crying
                never helps any one, Davy-boy, and—”
                
                “I ain't crying 'cause Dora fell down cellar,” said Davy, cutting short
                Anne's wellmeant preachment with increasing bitterness. “I'm crying,
                cause I wasn't there to see her fall. I'm always missing some fun or
                other, seems to me.”
                
                “Oh, Davy!” Anne choked back an unholy shriek of laughter. “Would you
                call it fun to see poor little Dora fall down the steps and get hurt?”
                
                “She wasn't _much_ hurt,” said Davy, defiantly. “'Course, if she'd been
                killed I'd have been real sorry, Anne. But the Keiths ain't so easy
                killed. They're like the Blewetts, I guess. Herb Blewett fell off the
                hayloft last Wednesday, and rolled right down through the turnip chute
                into the box stall, where they had a fearful wild, cross horse, and
                rolled right under his heels. And still he got out alive, with only
                three bones broke. Mrs. Lynde says there are some folks you can't kill
                with a meat-axe. Is Mrs. Lynde coming here tomorrow, Anne?”
                
                “Yes, Davy, and I hope you'll be always very nice and good to her.”
                
                “I'll be nice and good. But will she ever put me to bed at nights,
                Anne?”
                
                “Perhaps. Why?”
                
                “'Cause,” said Davy very decidedly, “if she does I won't say my prayers
                before her like I do before you, Anne.”
                
                “Why not?”
                
                “'Cause I don't think it would be nice to talk to God before strangers,
                Anne. Dora can say hers to Mrs. Lynde if she likes, but _I_ won't. I'll
                wait till she's gone and then say 'em. Won't that be all right, Anne?”
                
                “Yes, if you are sure you won't forget to say them, Davy-boy.”
                
                “Oh, I won't forget, you bet. I think saying my prayers is great fun.
                But it won't be as good fun saying them alone as saying them to you. I
                wish you'd stay home, Anne. I don't see what you want to go away and
                leave us for.”
                
                “I don't exactly _want_ to, Davy, but I feel I ought to go.”
                
                “If you don't want to go you needn't. You're grown up. When _I_'m grown
                up I'm not going to do one single thing I don't want to do, Anne.”
                
                “All your life, Davy, you'll find yourself doing things you don't want
                to do.”
                
                “I won't,” said Davy flatly. “Catch me! I have to do things I don't
                want to now 'cause you and Marilla'll send me to bed if I don't. But
                when I grow up you can't do that, and there'll be nobody to tell me not
                to do things. Won't I have the time! Say, Anne, Milty Boulter says his
                mother says you're going to college to see if you can catch a man. Are
                you, Anne? I want to know.”
                
                For a second Anne burned with resentment. Then she laughed, reminding
                herself that Mrs. Boulter's crude vulgarity of thought and speech could
                not harm her.
                
                “No, Davy, I'm not. I'm going to study and grow and learn about many
                things.”
                
                “What things?”
                
                “Shoes and ships and sealing wax
                And cabbages and kings,'”
                
                
                quoted Anne.
                
                “But if you _did_ want to catch a man how would you go about it? I want
                to know,” persisted Davy, for whom the subject evidently possessed a
                certain fascination.
                
                “You'd better ask Mrs. Boulter,” said Anne thoughtlessly. “I think it's
                likely she knows more about the process than I do.”
                
                “I will, the next time I see her,” said Davy gravely.
                
                “Davy! If you do!” cried Anne, realizing her mistake.
                
                “But you just told me to,” protested Davy aggrieved.
                
                “It's time you went to bed,” decreed Anne, by way of getting out of the
                scrape.
                
                After Davy had gone to bed Anne wandered down to Victoria Island and
                sat there alone, curtained with fine-spun, moonlit gloom, while the
                water laughed around her in a duet of brook and wind. Anne had always
                loved that brook. Many a dream had she spun over its sparkling water in
                days gone by. She forgot lovelorn youths, and the cayenne speeches of
                malicious neighbors, and all the problems of her girlish existence. In
                imagination she sailed over storied seas that wash the distant shining
                shores of “faery lands forlorn,” where lost Atlantis and Elysium lie,
                with the evening star for pilot, to the land of Heart's Desire. And she
                was richer in those dreams than in realities; for things seen pass
                away, but the things that are unseen are eternal.
                
            </div>

        </div>
        <div class="col-3">
            <img src="3-3.jpg" width="140px">
            <br/>
            <div class="author">
                <i><strong>Author:</strong> Lucy Maud Montgomery
                    <br/>
                   <strong> Illustrator:</strong>  A. and W. A. J. Claus
                    <br/>
                    <strong>Country:</strong>  Canada 
                    <br/>
                    <strong>Language:</strong> English
                    <br/>
                    <strong>Genre:</strong> Novel
                    <br/>
                    <strong>Published:</strong> 1915
                </i>
            </div>    
        </div>
    </div>
   </div> `;}

/////////////Forth book //////////////////

function forthBookDisplay(event){
    event.preventDefault();
    let forthBook=document.querySelector("#book");
    forthBook.innerHTML=`<div class="forth-book" id="forthBook">
    <br/>
    <h1 class="forth-book-letter">Anne of Windy Poplars</h1>
    <div class="row">
        <div class="col-9">
            <q><i>I don't know as that's much benefit when you're always making new ones.</i></q><br/>
            Anne of Windy Poplars—published as Anne of Windy Willows in the UK, Australia, and Japan—is an epistolary novel by Canadian author L. M. Montgomery. First published in 1936 by McClelland and Stewart, it details Anne Shirley's experiences while serving as principal of a high school in Summerside, Prince Edward Island over three years. A large portion of the novel is presented through letters Anne writes to her fiancé, Gilbert Blythe. Chronologically, the book is fourth in the series, but it was the seventh book written.

The book's United States copyright was renewed in 1963. The novel takes place over the three years between Anne's graduation from Redmond College and her marriage to Gilbert Blythe. While Gilbert is in medical school, Anne takes a job as the principal of Summerside High School, where she also teaches. She lives in a beautiful house called Windy Poplars with two elderly widows, Aunt Kate and Aunt Chatty, their housekeeper, Rebecca Dew, and their cat, Dusty Miller.
            <br/>
            <button  class="forth-chapter-button" id="forthChapterButon" >First chapter</button>
            <div class="forth-chapter" id="forthChapter">
                <h3>First chapter</h3>
                "Windy Poplars,
                "Spook's Lane,
                "S'side, P. E. I.,
                "Monday, September 12th.
                
                "DEAREST:
                
                "Isn't that an address! Did you ever hear anything so delicious? Windy Poplars is the name of my new home and I love it. I also love Spook's Lane, which has no legal existence. It should be Trent Street but it is never called Trent Street except on the rare occasions when it is mentioned in the Weekly Courier... and then people look at each other and say, 'Where on earth is that?' Spook's Lane it is...although for what reason I cannot tell you. I have already asked Rebecca Dew about it, but all she can say is that it has always been Spook's Lane and there was some old yarn years ago of its being haunted. But she has never seen anything worse-looking than herself in it.
                
                "However, I mustn't get ahead of my story. You don't know Rebecca Dew yet. But you will, oh, yes, you will. I foresee that Rebecca Dew will figure largely in my future correspondence.
                
                "It's dusk, dearest. (In passing, isn't 'dusk' a lovely word? I like it better than twilight. It sounds so velvety and shadowy and...and...dusky.) In daylight I belong to the world...in the night to sleep and eternity. But in the dusk I'm free from both and belong only to myself...and you. So I'm going to keep this hour sacred to writing to you. Though this won't be a love-letter. I have a scratchy pen and I can't write love-letters with a scratchy pen...or a sharp pen...or a stub pen. So you'll only get that kind of letter from me when I have exactly the right kind of pen. Meanwhile, I'll tell you about my new domicile and its inhabitants. Gilbert, they're such dears.
                
                "I came up yesterday to look for a boarding-house. Mrs. Rachel Lynde came with me, ostensibly to do some shopping but really, I know, to choose a boarding-house for me. In spite of my Arts course and my B.A., Mrs. Lynde still thinks I am an inexperienced young thing who must be guided and directed and overseen.
                
                "We came by train and oh, Gilbert, I had the funniest adventure. You know I've always been one to whom adventures came unsought. I just seem to attract them, as it were.
                
                "It happened just as the train was coming to a stop at the station. I got up and, stooping to pick up Mrs. Lynde's suitcase (she was planning to spend Sunday with a friend in Summerside), I leaned my knuckles heavily on what I thought was the shiny arm of a seat. In a second I received a violent crack across them that nearly made me howl. Gilbert, what I had taken for the arm of a seat was a man's bald head. He was glaring fiercely at me and had evidently just waked up. I apologized abjectly and got off the train as quickly as possible. The last I saw of him he was still glaring. Mrs. Lynde was horrified and my knuckles are sore yet!
                
                "I did not expect to have much trouble in finding a boarding-house, for a certain Mrs. Tom Pringle has been boarding the various principals of the High School for the last fifteen years. But, for some unknown reason, she has grown suddenly tired of 'being bothered' and wouldn't take me. Several other desirable places had some polite excuse. Several other places weren't desirable. We wandered about the town the whole afternoon and got hot and tired and blue and headachy...at least I did. I was ready to give up in despair...and then, Spook's Lane just happened!
                
                "We had dropped in to see Mrs. Braddock, an old crony of Mrs. Lynde's. And Mrs. Braddock said she thought 'the widows' might take me in.
                
                "'I've heard they want a boarder to pay Rebecca Dew's wages. They can't afford to keep Rebecca any longer unless a little extra money comes in. And if Rebecca goes, who is to milk that old red cow?'
                
                "Mrs. Braddock fixed me with a stern eye as if she thought I ought to milk the red cow but wouldn't believe me on oath if I claimed I could.
                
                "'What widows are you talking about?' demanded Mrs. Lynde.
                
                "'Why, Aunt Kate and Aunt Chatty,' said Mrs. Braddock, as if everybody, even an ignorant B.A., ought to know that. 'Aunt Kate is Mrs. Amasa MacComber (she's the Captain's widow) and Aunt Chatty is Mrs. Lincoln MacLean, just a plain widow. But every one calls them "aunt." They live at the end of Spook's Lane.'
                
                "Spook's Lane! That settled it. I knew I just had to board with the widows.
                
                "'Let's go and see them at once,' I implored Mrs. Lynde. It seemed to me if we lost a moment Spook's Lane would vanish back into fairyland.
                
                "'You can see them, but it'll be Rebecca who'll really decide whether they'll take you or not. Rebecca Dew rules the roost at Windy Poplars, I can tell you."
                
                "Windy Poplars! It couldn't be true...no it couldn't. I must be dreaming. And Mrs. Rachel Lynde was actually saying it was a funny name for a place.
                
                "'Oh, Captain MacComber called it that. It was his house, you know. He planted all the poplars round it and was mighty proud of it, though he was seldom home and never stayed long. Aunt Kate used to say that was inconvenient, but we never got it figured out whether she meant his staying such a little time or his coming back at all. Well, Miss Shirley, I hope you'll get there. Rebecca Dew's a good cook and a genius with cold potatoes. If she takes a notion to you you'll be in clover. If she doesn't...well, she won't, that's all. I hear there's a new banker in town looking for a boarding-house and she may prefer him. It's kind of funny Mrs. Tom Pringle wouldn't take you. Summerside is full of Pringles and half Pringles. They're called "The Royal Family" and you'll have to get on their good side, Miss Shirley, or you'll never get along in Summerside High. They've always ruled the roost hereabouts...there's a street called after old Captain Abraham Pringle. There's a regular clan of them, but the two old ladies at Maplehurst boss the tribe. I did hear they were down on you.'
                
                "'Why should they be?' I exclaimed. 'I'm a total stranger to them.'
                
                "'Well, a third cousin of theirs applied for the Principalship and they all think he should have got it. When your application was accepted the whole kit and boodle of them threw back their heads and howled. Well, people are like that. We have to take them as we find them, you know. They'll be as smooth as cream to you but they'll work against you every time. I'm not wanting to discourage you but forewarned is forearmed. I hope you'll make good just to spite them. If the widows take you, you won't mind eating with Rebecca Dew, will you? She isn't a servant, you know. She's a far-off cousin of the Captain's. She doesn't come to the table when there's company...she knows her place then... but if you were boarding there she wouldn't consider you company, of course.'
                
                "I assured the anxious Mrs. Braddock that I'd love eating with Rebecca Dew and dragged Mrs. Lynde away. I must get ahead of the banker.
                
                "Mrs. Braddock followed us to the door.
                
                "'And don't hurt Aunt Chatty's feelings, will you? Her feelings are so easily hurt. She's so sensitive, poor thing. You see, she hasn't quite as much money as Aunt Kate...though Aunt Kate hasn't any too much either. And then Aunt Kate liked her husband real well...her own husband, I mean...but Aunt Chatty didn't...didn't like hers, I mean. Small wonder! Lincoln MacLean was an old crank...but she thinks people hold it against her. It's lucky this is Saturday. If it was Friday Aunt Chatty wouldn't even consider taking you. You'd think Aunt Kate would be the superstitious one, wouldn't you? Sailors are kind of like that. But it's Aunt Chatty...although her husband was a carpenter. She was very pretty in her day, poor thing.'
                
                "I assured Mrs. Braddock that Aunt Chatty's feelings would be sacred to me, but she followed us down the walk.
                
                "'Kate and Chatty won't explore your belongings when you're out. They're very conscientious. Rebecca Dew may, but she won't tell on you. And I wouldn't go to the front door if I was you. They only use it for something real important. I don't think it's been opened since Amasa's funeral. Try the side door. They keep the key under the flower-pot on the window-sill, so if nobody's home just unlock the door and go in and wait. And whatever you do, don't praise the cat, because Rebecca Dew doesn't like him.'
                
                "I promised I wouldn't praise the cat and we actually got away. Erelong we found ourselves in Spook's Lane. It is a very short side street, leading out to open country, and far away a blue hill makes a beautiful back-drop for it. On one side there are no houses at all and the land slopes down to the harbor. On the other side there are only three. The first one is just a house...nothing more to be said of it. The next one is a big, imposing, gloomy mansion of stone-trimmed red brick, with a mansard roof warty with dormer-windows, an iron railing around the flat top and so many spruces and firs crowding about it that you can hardly see the house. It must be frightfully dark inside. And the third and last is Windy Poplars, right on the corner, with the grass-grown street on the front and a real country road, beautiful with tree shadows, on the other side.
                
                "I fell in love with it at once. You know there are houses which impress themselves upon you at first sight for some reason you can hardly define. Windy Poplars is like that. I may describe it to you as a white frame house...very white...with green shutters...very green...with a 'tower' in the corner and a dormer-window on either side, a low stone wall dividing it from the street, with aspen poplars growing at intervals along it, and a big garden at the back where flowers and vegetables are delightfully jumbled up together...but all this can't convey its charm to you. In short, it is a house with a delightful personality and has something of the flavor of Green Gables about it.
                
                "'This is the spot for me...it's been foreordained,' I said rapturously.
                
                "Mrs. Lynde looked as if she didn't quite trust foreordination.
                
                "'It'll be a long walk to school,' she said dubiously.
                
                "'I don't mind that. It will be good exercise. Oh, look at that lovely birch and maple grove across the road.'
                
                "Mrs. Lynde looked but all she said was,
                
                "'I hope you won't be pestered with mosquitoes.'
                
                "I hoped so, too. I detest mosquitoes. One mosquito can keep me 'awaker' than a bad conscience.
                
                "I was glad we didn't have to go in by the front door. It looked so forbidding...a big, double-leaved, grained-wood affair, flanked by panels of red, flowered glass. It doesn't seem to belong to the house at all. The little green side door, which we reached by a darling path of thin, flat sandstones sunk at intervals in the grass, was much more friendly and inviting. The path was edged by very prim, well-ordered beds of ribbon grass and bleeding-heart and tiger-lilies and sweet-William and southernwood and bride's bouquet and red-and-white daisies and what Mrs. Lynde calls 'pinies.' Of course they weren't all in bloom at this season, but you could see they had bloomed at the proper time and done it well. There was a rose plot in a far corner and between Windy Poplars and the gloomy house next a brick wall all overgrown with Virginia creeper, with an arched trellis above a faded green door in the middle of it. A vine ran right across it, so it was plain it hadn't been opened for some time. It was really only half a door, for its top half is merely an open oblong through which we could catch a glimpse of a jungly garden on the other side.
                
                "Just as we entered the gate of the garden of Windy Poplars I noticed a little clump of clover right by the path. Some impulse led me to stoop down and look at it. Would you believe it, Gilbert? There, right before my eyes, were three four-leafed clovers! Talk about omens! Even the Pringles can't contend against that. And I felt sure the banker hadn't an earthly chance.
                
                "The side door was open so it was evident somebody was at home and we didn't have to look under the flower-pot. We knocked and Rebecca Dew came to the door. We knew it was Rebecca Dew because it couldn't have been any one else in the whole wide world. And she couldn't have had any other name.
                
                "Rebecca Dew is 'around forty' and if a tomato had black hair racing away from its forehead, little twinkling black eyes, a tiny nose with a knobby end and a slit of a mouth, it would look exactly like her. Everything about her is a little too short...arms and legs and neck and nose...everything but her smile. It is long enough to reach from ear to ear.
                
                "But we didn't see her smile just then. She looked very grim when I asked if I could see Mrs. MacComber.
                
                "'You mean Mrs. Captain MacComber?' she said rebukingly, as if there were at least a dozen Mrs. MacCombers in the house.
                
                "'Yes,' I said meekly. And we were forthwith ushered into the parlor and left there. It was rather a nice little room, a bit cluttered up with antimacassars but with a quiet, friendly atmosphere about it that I liked. Every bit of furniture had its own particular place which it had occupied for years. How that furniture shone! No bought polish ever produced that mirror-like gloss. I knew it was Rebecca Dew's elbow grease. There was a full-rigged ship in a bottle on the mantelpiece which interested Mrs. Lynde greatly. She couldn't imagine how it ever got into the bottle...but she thought it gave the room 'a nautical air.'
                
                "'The widows' came in. I liked them at once. Aunt Kate was tall and thin and gray, and a little austere...Marilla's type exactly: and Aunt Chatty was short and thin and gray, and a little wistful. She may have been very pretty once but nothing is now left of her beauty except her eyes. They are lovely...soft and big and brown.
                
                "I explained my errand and the widows looked at each other.
                
                "'We must consult Rebecca Dew,' said Aunt Chatty.
                
                "'Undoubtedly,' said Aunt Kate.
                
                "Rebecca Dew was accordingly summoned from the kitchen. The cat came in with her...a big fluffy Maltese, with a white breast and a white collar. I should have liked to stroke him, but, remembering Mrs. Braddock's warning, I ignored him.
                
                "Rebecca gazed at me without the glimmer of a smile.
                
                "'Rebecca,' said Aunt Kate, who, I have discovered, does not waste words, 'Miss Shirley wishes to board here. I don't think we can take her.'
                
                "'Why not?' said Rebecca Dew.
                
                "'It would be too much trouble for you, I am afraid,' said Aunt Chatty.
                
                "'I'm well used to trouble,' said Rebecca Dew. You can't separate those names, Gilbert. It's impossible...though the widows do it. They call her Rebecca when they speak to her. I don't know how they manage it.
                
                "'We are rather old to have young people coming and going,' persisted Aunt Chatty.
                
                "'Speak for yourself,' retorted Rebecca Dew. 'I'm only forty-five and I still have the use of my faculties. And I think it would be nice to have a young person sleeping in the house. A girl would be better than a boy any time. He'd be smoking day and night...burn us in our beds. If you must take a boarder, my advice would be to take her. But of course it's your house.'
                
                "She said and vanished...as Homer was so fond of remarking. I knew the whole thing was settled but Aunt Chatty said I must go up and see if I was suited with my room.
                
                "'We will give you the tower room, dear. It's not quite as large as the spare room, but it has a stove-pipe hole for a stove in winter and a much nicer view. You can see the old graveyard from it.'
                
                "I knew I would love the room...the very name, 'tower room,' thrilled me. I felt as if we were living in that old song we used to sing in Avonlea School about the maiden who 'dwelt in a high tower beside a gray sea.' It proved to be the dearest place. We ascended to it by a little flight of corner steps leading up from the stair-landing. It was rather small...but not nearly as small as that dreadful hall bedroom I had my first year at Redmond. It had two windows, a dormer one looking west and a gable one looking north, and in the corner formed by the tower another three-sided window with casements opening outward and shelves underneath for my books. The floor was covered with round, braided rugs, the big bed had a canopy top and a 'wild-goose' quilt and looked so perfectly smooth and level that it seemed a shame to spoil it by sleeping in it. And, Gilbert, it is so high that I have to climb into it by a funny little movable set of steps which in daytime are stowed away under it. It seems Captain MacComber bought the whole contraption in some 'foreign' place and brought it home.
                
                "There was a dear little corner cupboard with shelves trimmed with white scalloped paper and bouquets painted on its door. There was a round blue cushion on the window-seat...a cushion with a button deep in the center, making it look like a fat blue doughnut. And there was a sweet washstand with two shelves...the top one just big enough for a basin and jug of robin's-egg blue and the under one for a soap dish and hot water pitcher. It had a little brass-handled drawer full of towels and on a shelf over it a white china lady sat, with pink shoes and gilt sash and a red china rose in her golden china hair.
                
                "The whole place was engoldened by the light that came through the corn-colored curtains and there was the rarest tapestry on the whitewashed walls where the shadow patterns of the aspens outside fell...living tapestry, always changing and quivering. Somehow, it seemed such a happy room. I felt as if I were the richest girl in the world.
                
                "'You'll be safe there, that's what,' said Mrs. Lynde, as we went away.
                
                "'I expect I'll find some things a bit cramping after the freedom of Patty's Place,' I said, just to tease her.
                
                "'Freedom!' Mrs. Lynde sniffed. 'Freedom! Don't talk like a Yankee, Anne.'
                
                "I came up today, bag and baggage. Of course I hated to leave Green Gables. No matter how often and long I'm away from it, the minute a vacation comes I'm part of it again as if I had never been away, and my heart is torn over leaving it. But I know I'll like it here. And it likes me. I always know whether a house likes me or not.
                
                "The views from my windows are lovely...even the old graveyard, which is surrounded by a row of dark fir trees and reached by a winding, dyke-bordered lane. From my west window I can see all over the harbor to distant, misty shores, with the dear little sail-boats I love and the ships outward bound 'for ports unknown'...fascinating phrase! Such 'scope for imagination' in it! From the north window I can see into the grove of birch and maple across the road. You know I've always been a tree worshiper. When we studied Tennyson in our English course at Redmond I was always sorrowfully at one with poor Enone, mourning her ravished pines.
                
                "Beyond the grove and the graveyard is a lovable valley with the glossy red ribbon of a road winding through it and white houses dotted along it. Some valleys are lovable...you can't tell why. Just to look at them gives you pleasure. And beyond it again is my blue hill. I'm naming it Storm King...the ruling passion, etc.
                
                "I can be so alone up here when I want to be. You know it's lovely to be alone once in a while. The winds will be my friends. They'll wail and sigh and croon around my tower...the white winds of winter...the green winds of spring...the blue winds of summer...the crimson winds of autumn...and the wild winds of all seasons...'stormy wind fulfilling his word.' How I've always thrilled to that Bible verse...as if each and every wind had a message for me. I've always envied the boy who flew with the north wind in that lovely old story of George MacDonald's. Some night, Gilbert, I'll open my tower casement and just step into the arms of the wind...and Rebecca Dew will never know why my bed wasn't slept in that night.
                
                "I hope when we find our 'house of dreams,' dearest, that there will be winds around it. I wonder where it is...that unknown house. Shall I love it best by moonlight or dawn? That home of the future where we will have love and friendship and work...and a few funny adventures to bring laughter in our old age. Old age! Can we ever be old, Gilbert? It seems impossible.
                
                "From the left window in the tower I can see the roofs of the town...this place where I am to live for at least a year. People are living in those houses who will be my friends, though I don't know them yet. And perhaps my enemies. For the ilk of Pye are found everywhere, under all kinds of names, and I understand the Pringles are to be reckoned with. School begins tomorrow. I shall have to teach geometry! Surely that can't be any worse than learning it. I pray heaven there are no mathematical geniuses among the Pringles.
                
                "I've been here only for half a day, but I feel as if I had known the widows and Rebecca Dew all my life. They've asked me to call them 'aunt' already and I've asked them to call me Anne. I called Rebecca Dew 'Miss Dew'...once.
                
                "'Miss What?' quoth she.
                
                "'Dew,' I said meekly. 'Isn't that your name?'
                
                "'Well, yes, it is, but I ain't been called Miss Dew for so long it gave me quite a turn. You'd better not do it any more, Miss Shirley, me not being used to it.'
                
                "'I'll remember, Rebecca...Dew,' I said, trying my hardest to leave off the Dew but not succeeding.
                
                "Mrs. Braddock was quite right in saying Aunt Chatty was sensitive. I discovered that at supper-time. Aunt Kate had said something about 'Chatty's sixty-sixth birthday.' Happening to glance at Aunt Chatty I saw that she had...no, not burst into tears. That is entirely too explosive a term for her performance. She just overflowed. The tears welled up in her big brown eyes and brimmed over, effortlessly and silently.
                
                "'What's the matter now, Chatty?' asked Aunt Kate rather dourly.
                
                "'It...it was only my sixty-fifth birthday,' said Aunt Chatty.
                
                "'I beg your pardon, Charlotte,' said Aunt Kate...and all was sunshine again.
                
                "The cat is a lovely big Tommy-cat with golden eyes, an elegant coat of dusty Maltese and irreproachable linen. Aunts Kate and Chatty call him Dusty Miller, because that is his name, and Rebecca Dew calls him That Cat because she resents him and resents the fact that she has to give him a square inch of liver every morning and evening, clean his hairs off the parlor arm-chair seat with an old tooth-brush whenever he has sneaked in and hunt him up if he is out late at night.
                
                "'Rebecca Dew has always hated cats,' Aunt Chatty tells me, 'and she hates Dusty especially. Old Mrs. Campbell's dog...she kept a dog then...brought him here two years ago in his mouth. I suppose he thought it was no use to take him to Mrs. Campbell. Such a poor miserable little kitten, all wet and cold, with its poor little bones almost sticking through its skin. A heart of stone couldn't have refused it shelter. So Kate and I adopted it, but Rebecca Dew has never really forgiven us. We were not diplomatic that time. We should have refused to take it in. I don't know if you've noticed...' Aunt Chatty looked cautiously around at the door between the dining-room and kitchen...'how we manage Rebecca Dew.'
                
                "I had noticed it...and it was beautiful to behold. Summerside and Rebecca Dew may think she rules the roost but the widows know differently.
                
                "'We didn't want to take the banker...a young man would have been so unsettling and we would have had to worry so much if he didn't go to church regularly. But we pretended we did and Rebecca Dew simply wouldn't hear of it. I'm so glad we have you, dear. I feel sure you'll be a very nice person to cook for. I hope you'll like us all. Rebecca Dew has some very fine qualities. She was not so tidy when she came fifteen years ago as she is now. Once Kate had to write her name..."Rebecca Dew"...right across the parlor mirror to show the dust. But she never had to do it again. Rebecca Dew can take a hint. I hope you'll find your room comfortable, dear. You may have the window open at night. Kate does not approve of night air but she knows boarders must have privileges. She and I sleep together and we have arranged it so that one night the window is shut for her and the next it is open for me. One can always work out little problems like that, don't you think? Where there is a will there is always a way. Don't be alarmed if you hear Rebecca prowling a good deal in the night. She is always hearing noises and getting up to investigate them. I think that is why she didn't want the banker. She was afraid she might run into him in her nightgown. I hope you won't mind Kate not talking much. It's just her way. And she must have so many things to talk of...she was all over the world with Amasa MacComber in her young days. I wish I had the subjects for conversation she has, but I've never been off P. E. Island. I've often wondered why things should be arranged so...me loving to talk and with nothing to talk about and Kate with everything and hating to talk. But I suppose Providence knows best.'
                
                "Although Aunt Chatty is a talker all right, she didn't say all this without a break. I interjected remarks at suitable intervals, but they were of no importance.
                
                "They keep a cow which is pastured at Mr. James Hamilton's up the road and Rebecca Dew goes there to milk her. There is any amount of cream and every morning and evening I understand Rebecca Dew passes a glass of new milk through the opening in the wall gate to Mrs. Campbell's 'Woman.' It is for 'little Elizabeth,' who must have it under doctor's orders. Who the Woman is, or who little Elizabeth is, I have yet to discover. Mrs. Campbell is the inhabitant and owner of the fortress next door...which is called The Evergreens.
                
                "I don't expect to sleep tonight...I never do sleep my first night in a strange bed and this is the very strangest bed I've ever seen. But I won't mind. I've always loved the night and I'll like lying awake and thinking over everything in life, past, present and to come. Especially to come.
                
                "This is a merciless letter, Gilbert. I won't inflict such a long one on you again. But I wanted to tell you everything, so that you could picture my new surroundings for yourself. It has come to an end now, for far up the harbor the moon is 'sinking into shadow-land.' I must write a letter to Marilla yet. It will reach Green Gables the day after tomorrow and Davy will bring it home from the post-office, and he and Dora will crowd around Marilla while she opens it and Mrs. Lynde will have both ears open...Ow...w...w! That has made me homesick. Good-night, dearest, from one who is now and ever will be,
                
                "Fondestly yours,
                
                "ANNE SHIRLEY."
                
            </div>

        </div>
        <div class="col-3">
            <img src="4-4.jpg" width="140px">
            <br/>
            <div class="author">
                <i><strong>Author:</strong> Lucy Maud Montgomery
                    <br/>
                   <strong> Illustrator:</strong>  A. and W. A. J. Claus
                    <br/>
                    <strong>Country:</strong>  Canada 
                    <br/>
                    <strong>Language:</strong> English
                    <br/>
                    <strong>Genre:</strong> Novel
                    <br/>
                    <strong>Published:</strong> 1936
                </i>
            </div>    
        </div>
    </div>
   </div> `}


///////////////Fifth book///////////

function fifthBookDisplay(event){
    event.preventDefault();
    let fifthBook=document.querySelector("#book");
    fifthBook.innerHTML=`<div class="fifth-book" id="fifthBook">
    <br/>
    <h1 class="fifth-book-letter">Anne's House of Dreams</h1>
    <div class="row">
        <div class="col-9">
            <q><i>because when you are imagining, you might as well imagine something worth while.</i></q><br/>
            Anne's House of Dreams is a novel by Canadian author Lucy Maud Montgomery. It was first published in 1917 by McClelland, Goodchild and Stewart.

The novel is from a series of books written primarily for girls and young women, about a girl named Anne Shirley. The books follow the course of Anne's life. It is set principally on Canada's Prince Edward Island, Montgomery's birthplace and home for much of her life.

The series has been called classic children's literature, and has been reprinted many times since its original publication.

Anne's House of Dreams is book five in the series, and chronicles Anne's early married life, as she and her childhood sweetheart Gilbert Blythe begin to build their life together.
            <br/>
            <button  class="fifth-chapter-button" id="fifthChapterButon" >First chapter</button>
            <div class="fifth-chapter" id="fifthChapter">
                <h3>First chapter</h3>
                “Thanks be, I'm done with geometry, learning or teaching it,” said Anne Shirley, a trifle vindictively, as she thumped a somewhat battered volume of Euclid into a big chest of books, banged the lid in triumph, and sat down upon it, looking at Diana Wright across the Green Gables garret, with gray eyes that were like a morning sky.

The garret was a shadowy, suggestive, delightful place, as all garrets should be. Through the open window, by which Anne sat, blew the sweet, scented, sun-warm air of the August afternoon; outside, poplar boughs rustled and tossed in the wind; beyond them were the woods, where Lover's Lane wound its enchanted path, and the old apple orchard which still bore its rosy harvests munificently. And, over all, was a great mountain range of snowy clouds in the blue southern sky. Through the other window was glimpsed a distant, white-capped, blue sea—the beautiful St. Lawrence Gulf, on which floats, like a jewel, Abegweit, whose softer, sweeter Indian name has long been forsaken for the more prosaic one of Prince Edward Island.

Diana Wright, three years older than when we last saw her, had grown somewhat matronly in the intervening time. But her eyes were as black and brilliant, her cheeks as rosy, and her dimples as enchanting, as in the long-ago days when she and Anne Shirley had vowed eternal friendship in the garden at Orchard Slope. In her arms she held a small, sleeping, black-curled creature, who for two happy years had been known to the world of Avonlea as “Small Anne Cordelia.” Avonlea folks knew why Diana had called her Anne, of course, but Avonlea folks were puzzled by the Cordelia. There had never been a Cordelia in the Wright or Barry connections. Mrs. Harmon Andrews said she supposed Diana had found the name in some trashy novel, and wondered that Fred hadn't more sense than to allow it. But Diana and Anne smiled at each other. They knew how Small Anne Cordelia had come by her name.

“You always hated geometry,” said Diana with a retrospective smile. “I should think you'd be real glad to be through with teaching, anyhow.”

“Oh, I've always liked teaching, apart from geometry. These past three years in Summerside have been very pleasant ones. Mrs. Harmon Andrews told me when I came home that I wouldn't likely find married life as much better than teaching as I expected. Evidently Mrs. Harmon is of Hamlet's opinion that it may be better to bear the ills that we have than fly to others that we know not of.”

Anne's laugh, as blithe and irresistible as of yore, with an added note of sweetness and maturity, rang through the garret. Marilla in the kitchen below, compounding blue plum preserve, heard it and smiled; then sighed to think how seldom that dear laugh would echo through Green Gables in the years to come. Nothing in her life had ever given Marilla so much happiness as the knowledge that Anne was going to marry Gilbert Blythe; but every joy must bring with it its little shadow of sorrow. During the three Summerside years Anne had been home often for vacations and weekends; but, after this, a bi-annual visit would be as much as could be hoped for.

“You needn't let what Mrs. Harmon says worry you,” said Diana, with the calm assurance of the four-years matron. “Married life has its ups and downs, of course. You mustn't expect that everything will always go smoothly. But I can assure you, Anne, that it's a happy life, when you're married to the right man.”

Anne smothered a smile. Diana's airs of vast experience always amused her a little.

“I daresay I'll be putting them on too, when I've been married four years,” she thought. “Surely my sense of humor will preserve me from it, though.”

“Is it settled yet where you are going to live?” asked Diana, cuddling Small Anne Cordelia with the inimitable gesture of motherhood which always sent through Anne's heart, filled with sweet, unuttered dreams and hopes, a thrill that was half pure pleasure and half a strange, ethereal pain.

“Yes. That was what I wanted to tell you when I 'phoned to you to come down today. By the way, I can't realize that we really have telephones in Avonlea now. It sounds so preposterously up-to-date and modernish for this darling, leisurely old place.”

“We can thank the A. V. I. S. for them,” said Diana. “We should never have got the line if they hadn't taken the matter up and carried it through. There was enough cold water thrown to discourage any society. But they stuck to it, nevertheless. You did a splendid thing for Avonlea when you founded that society, Anne. What fun we did have at our meetings! Will you ever forget the blue hall and Judson Parker's scheme for painting medicine advertisements on his fence?”

“I don't know that I'm wholly grateful to the A. V. I. S. in the matter of the telephone,” said Anne. “Oh, I know it's most convenient—even more so than our old device of signalling to each other by flashes of candlelight! And, as Mrs. Rachel says, 'Avonlea must keep up with the procession, that's what.' But somehow I feel as if I didn't want Avonlea spoiled by what Mr. Harrison, when he wants to be witty, calls 'modern inconveniences.' I should like to have it kept always just as it was in the dear old years. That's foolish—and sentimental—and impossible. So I shall immediately become wise and practical and possible. The telephone, as Mr. Harrison concedes, is 'a buster of a good thing'—even if you do know that probably half a dozen interested people are listening along the line.”

“That's the worst of it,” sighed Diana. “It's so annoying to hear the receivers going down whenever you ring anyone up. They say Mrs. Harmon Andrews insisted that their 'phone should be put in their kitchen just so that she could listen whenever it rang and keep an eye on the dinner at the same time. Today, when you called me, I distinctly heard that queer clock of the Pyes' striking. So no doubt Josie or Gertie was listening.”

“Oh, so that is why you said, 'You've got a new clock at Green Gables, haven't you?' I couldn't imagine what you meant. I heard a vicious click as soon as you had spoken. I suppose it was the Pye receiver being hung up with profane energy. Well, never mind the Pyes. As Mrs. Rachel says, 'Pyes they always were and Pyes they always will be, world without end, amen.' I want to talk of pleasanter things. It's all settled as to where my new home shall be.”

“Oh, Anne, where? I do hope it's near here.”

“No-o-o, that's the drawback. Gilbert is going to settle at Four Winds Harbor—sixty miles from here.”

“Sixty! It might as well be six hundred,” sighed Diana. “I never can get further from home now than Charlottetown.”

“You'll have to come to Four Winds. It's the most beautiful harbor on the Island. There's a little village called Glen St. Mary at its head, and Dr. David Blythe has been practicing there for fifty years. He is Gilbert's great-uncle, you know. He is going to retire, and Gilbert is to take over his practice. Dr. Blythe is going to keep his house, though, so we shall have to find a habitation for ourselves. I don't know yet what it is, or where it will be in reality, but I have a little house o'dreams all furnished in my imagination—a tiny, delightful castle in Spain.”

“Where are you going for your wedding tour?” asked Diana.

“Nowhere. Don't look horrified, Diana dearest. You suggest Mrs. Harmon Andrews. She, no doubt, will remark condescendingly that people who can't afford wedding 'towers' are real sensible not to take them; and then she'll remind me that Jane went to Europe for hers. I want to spend MY honeymoon at Four Winds in my own dear house of dreams.”

“And you've decided not to have any bridesmaid?”

“There isn't any one to have. You and Phil and Priscilla and Jane all stole a march on me in the matter of marriage; and Stella is teaching in Vancouver. I have no other 'kindred soul' and I won't have a bridesmaid who isn't.”

“But you are going to wear a veil, aren't you?” asked Diana, anxiously.

“Yes, indeedy. I shouldn't feel like a bride without one. I remember telling Matthew, that evening when he brought me to Green Gables, that I never expected to be a bride because I was so homely no one would ever want to marry me—unless some foreign missionary did. I had an idea then that foreign missionaries couldn't afford to be finicky in the matter of looks if they wanted a girl to risk her life among cannibals. You should have seen the foreign missionary Priscilla married. He was as handsome and inscrutable as those daydreams we once planned to marry ourselves, Diana; he was the best dressed man I ever met, and he raved over Priscilla's 'ethereal, golden beauty.' But of course there are no cannibals in Japan.”

“Your wedding dress is a dream, anyhow,” sighed Diana rapturously. “You'll look like a perfect queen in it—you're so tall and slender. How DO you keep so slim, Anne? I'm fatter than ever—I'll soon have no waist at all.”

“Stoutness and slimness seem to be matters of predestination,” said Anne. “At all events, Mrs. Harmon Andrews can't say to you what she said to me when I came home from Summerside, 'Well, Anne, you're just about as skinny as ever.' It sounds quite romantic to be 'slender,' but 'skinny' has a very different tang.”

“Mrs. Harmon has been talking about your trousseau. She admits it's as nice as Jane's, although she says Jane married a millionaire and you are only marrying a 'poor young doctor without a cent to his name.'”

Anne laughed.

“My dresses ARE nice. I love pretty things. I remember the first pretty dress I ever had—the brown gloria Matthew gave me for our school concert. Before that everything I had was so ugly. It seemed to me that I stepped into a new world that night.”

“That was the night Gilbert recited 'Bingen on the Rhine,' and looked at you when he said, 'There's another, NOT a sister.' And you were so furious because he put your pink tissue rose in his breast pocket! You didn't much imagine then that you would ever marry him.”

“Oh, well, that's another instance of predestination,” laughed Anne, as they went down the garret stairs.
            </div>

        </div>
        <div class="col-3">
            <img src="5-5.jpg" width="140px">
            <br/>
            <div class="author">
                <i><strong>Author:</strong> Lucy Maud Montgomery
                    <br/>
                   <strong> Illustrator:</strong>  A. and W. A. J. Claus
                    <br/>
                    <strong>Country:</strong>  Canada 
                    <br/>
                    <strong>Language:</strong> English
                    <br/>
                    <strong>Genre:</strong> Novel
                    <br/>
                    <strong>Published:</strong> 1917
                </i>
            </div>    
        </div>
    </div>
   </div> `}


/////////////////Sixth book/////////////

function sixthBookDisplay(event){
    event.preventDefault();
    let sixthBook=document.querySelector("#book");
    sixthBook.innerHTML=`<div class="sixth-book" id="sixthBook">
    <br/>
    <h1 class="sixth-book-letter">Anne of Ingleside</h1>
    <div class="row">
        <div class="col-9">
            <q><i>My life is a perfect graveyard of buried hopes.</i></q><br/>
            Anne of Ingleside is a children's novel by Canadian author Lucy Maud Montgomery. It was first published in July 1939 by McClelland and Stewart (Toronto) and the Frederick A. Stokes Company (New York). It is the tenth of eleven books that feature the character of Anne Shirley, and Montgomery's final published novel.

            Chronologically, Anne of Ingleside precedes Rainbow Valley, which was published years earlier. In addition, a short story collection The Blythes Are Quoted, written in 1941/42 yet not published until 2009, concludes the Anne stories.
            
            The book's United States copyright was renewed in 1967.
            <button  class="sixth-chapter-button" id="sixthChapterButon" >First chapter</button>
            <div class="sixth-chapter" id="sixthChapter">
                <h3>First chapter</h3>
                "How white the moonlight is tonight!" said Anne Blythe to herself, as she went up the walk of the Wright garden to Diana Wright's front door, where little cherry-blossom petals were coming down on the salty, breeze-stirred air.

                She paused for a moment to look about her on hills and woods she had loved in olden days and still loved. Dear Avonlea! Glen St. Mary was home to her now and had been home for many years but Avonlea had something that Glen St. Mary could never have. Ghosts of herself met her at every turn...the fields she had roamed in welcomed her...unfading echoes of the old sweet life were all about her...every spot she looked upon had some lovely memory. There were haunted gardens here and there where bloomed all the roses of yesteryear. Anne always loved to come home to Avonlea even when, as now, the reason for her visit had been a sad one. She and Gilbert had come up for the funeral of his father and Anne had stayed for a week. Marilla and Mrs. Lynde could not bear to have her go away too soon.
                
                Her old porch gable room was always kept for her and when Anne had gone to it the night of her arrival she found that Mrs. Lynde had put a big, homey bouquet of spring flowers in it for her...a bouquet that, when Anne buried her face in it, seemed to hold all the fragrance of unforgotten years. The Anne-who-used-to-be was waiting there for her. Deep, dear old gladnesses stirred in her heart. The gable room was putting its arms around her...enclosing her...enveloping her. She looked lovingly at her old bed with the apple-leaf spread Mrs. Lynde had knitted and the spotless pillows trimmed with deep lace Mrs. Lynde had crocheted...at Marilla's braided rugs on the floor...at the mirror that had reflected the face of the little orphan, with her unwritten child's forehead, who had cried herself to sleep there that first night so long ago. Anne forgot that she was the joyful mother of five children...with Susan Baker again knitting mysterious bootees at Ingleside. She was Anne of Green Gables once more.
                
                Mrs. Lynde found her still staring dreamily in the mirror when she came in, bringing clean towels.
                
                "It's real good to have you home again, Anne, that's what. It's nine years since you went away, but Marilla and I can't seem to get over missing you. It's not so lonesome now since Davy got married...Millie is a real nice little thing...such pies!...though she's curious as a chipmunk about everything. But I've always said and always will say that there's nobody like you."
                
                "Ah, but this mirror can't be tricked, Mrs. Lynde. It's telling me plainly, 'You're not as young as you once were,'" said Anne whimsically.
                
                "You've kept your complexion very well," said Mrs. Lynde consolingly. "Of course you never had much colour to lose."
                
                "At any rate, I've never a hint of a second chin yet," said Anne gaily. "And my old room remembers me, Mrs. Lynde. I'm glad...it would hurt me so if I ever came back and found it had forgotten me. And it's wonderful to see the moon rising over the Haunted Wood again."
                
                "It looks like a great big piece of gold in the sky, doesn't it?" said Mrs. Lynde, feeling that she was taking a wild, poetical flight and thankful that Marilla wasn't there to hear.
                
                "Look at those pointed firs coming out against it...and the birches in the hollow still holding their arms up to the silver sky. They're big trees now...they were just baby things when I came here...that does make me feel a bit old."
                
                "Trees are like children," said Mrs. Lynde. "It's dreadful the way they grow up the minute you turn your back on them. Look at Fred Wright...he's only thirteen but he's nearly as tall as his father. There's a hot chicken pie for supper and I made some of my lemon biscuits for you. You needn't be a mite afraid to sleep in that bed. I aired the sheets today...and Marilla didn't know I did it and gave them another airing...and Millie didn't know either of us did and gave them a third. I hope Mary Maria Blythe will get out tomorrow...she always enjoys a funeral so."
                
                "Aunt Mary Maria...Gilbert always calls her that although she is only his father's cousin...always calls me 'Annie,'" shuddered Anne. "And the first time she saw me after I was married she said, 'It's so strange Gilbert picked you. He could have had so many nice girls.' Perhaps that's why I've never liked her...and I know Gilbert doesn't either, though he's too clannish to admit it."
                
                "Will Gilbert be staying up long?"
                
                "No. He has to go back tomorrow night. He left a patient in a very critical condition."
                
                "Oh, well, I suppose there isn't much to keep him in Avonlea now, since his mother went last year. Old Mr. Blythe never held up his head after her death...just hadn't anything left to live for. The Blythes were always like that...always set their affections too much on earthly things. It's real sad to think there are none of them left in Avonlea. They were a fine old stock. But then...there's any amount of Sloanes. The Sloanes are still Sloanes, Anne, and will be for ever and ever, world without end, amen."
                
                "Let there be as many Sloanes as there will, I'm going out after supper to walk all over the old orchard by moonlight. I suppose I'll have to go to bed finally...though I've always thought sleeping on moonlight nights a waste of time...but I'm going to wake early to see the first faint morning light steal over the Haunted Wood. The sky will turn to coral and the robins will be strutting around...perhaps a little grey sparrow will light on the windowsill...and there'll be gold and purple pansies to look at..."
                
                "But the rabbits has et up all the June lily bed," said Mrs. Lynde sadly, as she waddled downstairs, feeling secretly relieved that there need be no more talk about the moon. Anne had always been a bit queer that way. And there did not any longer seem to be much use in hoping she would outgrow it.
                
                Diana came down the walk to meet Anne. Even in the moonlight you saw that her hair was still black and her cheeks rosy and her eyes bright. But the moonlight could not hide that she was something stouter than in years agone...and Diana had never been what Avonlea folks called "skinny."
                
                "Don't worry, darling...I haven't come to stay..."
                
                "As if I'd worry over that," said Diana reproachfully. "You know I'd far rather spend the evening with you than go to the reception. I feel I haven't seen half enough of you and now you're going back day after tomorrow. But Fred's brother, you know...we've just got to go."
                
                "Of course you have. And I just ran up for a moment. I came the old way, Di...past the Dryad's Bubble...through the Haunted Wood...past your bowery old garden...and along by Willowmere. I even stopped to watch the willows upside down in the water as we always used to do. They've grown so."
                
                "Everything has," said Diana with a sigh. "When I look at young Fred! We've all changed so...except you. You never change, Anne. How do you keep so slim? Look at me!"
                
                "A bit matronish of course," laughed Anne. "But you've escaped the middle-aged spread so far, Di. As for my not changing...well, Mrs. H. B. Donnell agrees with you. She told me at the funeral that I didn't look a day older. But Mrs. Harmon Andrews doesn't. She said, 'Dear me, Anne, how you've failed!' It's all in the beholder's eye...or conscience. The only time I feel I'm getting along a bit is when I look at the pictures in the magazines. The heroes and heroines in them are beginning to look too young to me. But never mind, Di...we're going to be girls again tomorrow. That's what I've come up to tell you. We're going to take an afternoon and evening off and visit all our old haunts...every one of them. We'll walk over the spring fields and through those ferny old woods. We'll see all the old familiar things we loved and hills where we'll find our youth again. Nothing ever seems impossible in spring, you know. We'll stop feeling parental and responsible and be as giddy as Mrs. Lynde really thinks me still in her heart of hearts. There's really no fun in being sensible all the time, Diana."
                
                "My, how like you that sounds! And I'd love to. But..."
                
                "There aren't any buts. I know you're thinking, 'Who'll get the men's supper?'"
                
                "Not exactly. Anne Cordelia can get the men's supper as well as I can, if she is only eleven," said Diana proudly. "She was going to, anyway. I was going to the Ladies' Aid. But I won't. I'll go with you. It will be like having a dream come true. You know, Anne, lots of evenings I sit down and just pretend we're little girls again. I'll take our supper with us..."
                
                "And we'll eat it back in Hester Gray's garden...I suppose Hester Gray's garden is still there?"
                
                "I suppose so," said Diana doubtfully. "I've never been there since I was married. Anne Cordelia explores a lot...but I always tell her she mustn't go too far from home. She loves prowling about the woods...and one day when I scolded her for talking to herself in the garden she said she wasn't talking to herself...she was talking to the spirit of the flowers. You know that dolls' tea-set with the tiny pink rosebuds you sent her for her ninth birthday. There isn't a piece broken...she's so careful. She only uses it when the Three Green People come to tea with her. I can't get out of her who she thinks they are. I declare in some ways, Anne, she's far more like you than she is like me."
                
                "Perhaps there's more in a name than Shakespeare allowed. Don't grudge Anne Cordelia her fancies, Diana. I'm always sorry for children who don't spend a few years in fairyland."
                
                "Olivia Sloane is our teacher now," said Diana doubtfully. "She's a B.A., you know, and just took the school for a year to be near her mother. She says children should be made to face realities."
                
                "Have I lived to hear you taking up with Sloanishness, Diana Wright?"
                
                "No...no...NO! I don't like her a bit...She has such round staring blue eyes like all that clan. And I don't mind Anne Cordelia's fancies. They're pretty...just like yours used to be. I guess she'll get enough 'reality' as life goes on."
                
                "Well, it's settled then. Come down to Green Gables about two and we'll have a drink of Marilla's red currant wine...she makes it now and then in spite of the minister and Mrs. Lynde...just to make us feel real devilish."
                
                "Do you remember the day you set me drunk on it?" giggled Diana, who did not mind "devilish" as she would if anybody but Anne used it. Everybody knew Anne didn't really mean things like that. It was just her way.
                
                "We'll have a real do-you-remember day tomorrow, Diana. I won't keep you any longer...there's Fred coming with the buggy. Your dress is lovely."
                
                "Fred made me get a new one for the wedding. I didn't feel we could afford it since we built the new barn, but he said he wasn't going to have his wife looking like someone that was sent for and couldn't go when everybody else would be dressed within an inch of her life. Wasn't that just like a man?"
                
                "Oh, you sound just like Mrs. Elliott at the Glen," said Anne severely. "You want to watch that tendency. Would you like to live in a world where there were no men?"
                
                "It would be horrible," admitted Diana. "Yes, yes, Fred, I'm coming. Oh, all right! Till tomorrow then, Anne."
                
                Anne paused by the Dryad's Bubble on her way back. She loved that old brook so. Every trill of her childhood's laughter that it had ever caught, it had held and now seemed to give out again to her listening ears. Her old dreams...she could see them reflected in the clear Bubble...old vows...old whispers...the brook kept them all and murmured of them...but there was no one to listen save the wise old spruces in the Haunted Wood that had been listening so long.
            </div>

        </div>
        <div class="col-3">
            <img src="6-6.jpg" width="140px">
            <br/>
            <div class="author">
                <i><strong>Author:</strong> Lucy Maud Montgomery
                    <br/>
                   <strong> Illustrator:</strong>  A. and W. A. J. Claus
                    <br/>
                    <strong>Country:</strong>  Canada 
                    <br/>
                    <strong>Language:</strong> English
                    <br/>
                    <strong>Genre:</strong> Novel
                    <br/>
                    <strong>Published:</strong> 1939
                </i>
            </div>    
        </div>
    </div>
   </div> `}


//////////////////seventh book///////////

function seventhBookDisplay(event){
    event.preventDefault();
    let seventhBook=document.querySelector("#book");
    seventhBook.innerHTML=` <div class="seventh-book" id="seventhBook">
    <br/>
    <h1 class="seventh-book-letter">Rainbow Valley</h1>
    <div class="row">
        <div class="col-9">
            <q><i>Do you think amethysts can be the souls of good violets?</i></q><br/>
            Rainbow Valley (1919) is the seventh book in the chronology of the Anne of Green Gables series by Lucy Maud Montgomery, although it was the fifth book published. Whereas Anne Shirley was the main protagonist of the previous books, this novel focuses more on her six children and their interactions with the children of Anne's new neighbour, Presbyterian minister John Meredith. The work draws heavily on Montgomery's own life in the Leaskdale Manse, where she wrote a large number of books.

            The book is dedicated: "To the memory of Goldwin Lapp, Robert Brookes and Morley Shier who made the supreme sacrifice that the happy valleys of their home land might be kept sacred from the ravage of the invader." This refers to World War I, which is the main theme of the next and final book in the series, Rilla of Ingleside.
            <button  class="seventh-chapter-button" id="seventhChapterButon" >First chapter</button>
            <div class="seventh-chapter" id="seventhChapter">
                <h3>First chapter</h3>
                IT was a clear, apple-green evening in May, and Four Winds Harbour was mirroring back the clouds of the golden west between its softly dark shores. The sea moaned eerily on the sand-bar, sorrowful even in spring, but a sly, jovial wind came piping down the red harbour road along which Miss Cornelia's comfortable, matronly figure was making its way towards the village of Glen St. Mary. Miss Cornelia was rightfully Mrs. Marshall Elliott, and had been Mrs. Marshall Elliott for thirteen years, but even yet more people referred to her as Miss Cornelia than as Mrs. Elliott. The old name was dear to her old friends, only one of them contemptuously dropped it. Susan Baker, the gray and grim and faithful handmaiden of the Blythe family at Ingleside, never lost an opportunity of calling her "Mrs. Marshall Elliott," with the most killing and pointed emphasis, as if to say "You wanted to be Mrs. and Mrs. you shall be with a vengeance as far as I am concerned."

Miss Cornelia was going up to Ingleside to see Dr. and Mrs. Blythe, who were just home from Europe. They had been away for three months, having left in February to attend a famous medical congress in London; and certain things, which Miss Cornelia was anxious to discuss, had taken place in the Glen during their absence. For one thing, there was a new family in the manse. And such a family! Miss Cornelia shook her head over them several times as she walked briskly along.

Susan Baker and the Anne Shirley of other days saw her coming, as they sat on the big veranda at Ingleside, enjoying the charm of the cat's light, the sweetness of sleepy robins whistling among the twilit maples, and the dance of a gusty group of daffodils blowing against the old, mellow, red brick wall of the lawn.

Anne was sitting on the steps, her hands clasped over her knee, looking, in the kind dusk, as girlish as a mother of many has any right to be; and the beautiful gray-green eyes, gazing down the harbour road, were as full of unquenchable sparkle and dream as ever. Behind her, in the hammock, Rilla Blythe was curled up, a fat, roly-poly little creature of six years, the youngest of the Ingleside children. She had curly red hair and hazel eyes that were now buttoned up after the funny, wrinkled fashion in which Rilla always went to sleep.

Shirley, "the little brown boy," as he was known in the family "Who's Who," was asleep in Susan's arms. He was brown-haired, brown-eyed and brown-skinned, with very rosy cheeks, and he was Susan's especial love. After his birth Anne had been very ill for a long time, and Susan "mothered" the baby with a passionate tenderness which none of the other children, dear as they were to her, had ever called out. Dr. Blythe had said that but for her he would never have lived.

"I gave him life just as much as you did, Mrs. Dr. dear," Susan was wont to say. "He is just as much my baby as he is yours." And, indeed, it was always to Susan that Shirley ran, to be kissed for bumps, and rocked to sleep, and protected from well-deserved spankings. Susan had conscientiously spanked all the other Blythe children when she thought they needed it for their souls' good, but she would not spank Shirley nor allow his mother to do it. Once, Dr. Blythe had spanked him and Susan had been stormily indignant.

"That man would spank an angel, Mrs. Dr. dear, that he would," she had declared bitterly; and she would not make the poor doctor a pie for weeks.

She had taken Shirley with her to her brother's home during his parents' absence, while all the other children had gone to Avonlea, and she had three blessed months of him all to herself. Nevertheless, Susan was very glad to find herself back at Ingleside, with all her darlings around her again. Ingleside was her world and in it she reigned supreme. Even Anne seldom questioned her decisions, much to the disgust of Mrs. Rachel Lynde of Green Gables, who gloomily told Anne, whenever she visited Four Winds, that she was letting Susan get to be entirely too much of a boss and would live to rue it.

"Here is Cornelia Bryant coming up the harbour road, Mrs. Dr. dear," said Susan. "She will be coming up to unload three months' gossip on us."

"I hope so," said Anne, hugging her knees. "I'm starving for Glen St. Mary gossip, Susan. I hope Miss Cornelia can tell me everything that has happened while we've been away–everything–who has got born, or married, or drunk; who has died, or gone away, or come, or fought, or lost a cow, or found a beau. It's so delightful to be home again with all the dear Glen folks, and I want to know all about them. Why, I remember wondering, as I walked through Westminster Abbey which of her two especial beaux Millicent Drew would finally marry. Do you know, Susan, I have a dreadful suspicion that I love gossip."

"Well, of course, Mrs. Dr. dear," admitted Susan, "every proper woman likes to hear the news. I am rather interested in Millicent Drew's case myself. I never had a beau, much less two, and I do not mind now, for being an old maid does not hurt when you get used to it. Millicent's hair always looks to me as if she had swept it up with a broom. But the men do not seem to mind that."

"They see only her pretty, piquant, mocking, little face, Susan."

"That may very well be, Mrs. Dr. dear. The Good Book says that favour is deceitful and beauty is vain, but I should not have minded finding that out for myself, if it had been so ordained. I have no doubt we will all be beautiful when we are angels, but what good will it do us then? Speaking of gossip, however, they do say that poor Mrs. Harrison Miller over harbour tried to hang herself last week."

"Oh, Susan!"

"Calm yourself, Mrs. Dr. dear. She did not succeed. But I really do not blame her for trying, for her husband is a terrible man. But she was very foolish to think of hanging herself and leaving the way clear for him to marry some other woman. If I had been in her shoes, Mrs. Dr. dear, I would have gone to work to worry him so that he would try to hang himself instead of me. Not that I hold with people hanging themselves under any circumstances, Mrs. Dr. dear."

"What is the matter with Harrison Miller, anyway?" said Anne impatiently. "He is always driving some one to extremes."

"Well, some people call it religion and some call it cussedness, begging your pardon, Mrs. Dr. dear, for using such a word. It seems they cannot make out which it is in Harrison's case. There are days when he growls at everybody because he thinks he is fore-ordained to eternal punishment. And then there are days when he says he does not care and goes and gets drunk. My own opinion is that he is not sound in his intellect, for none of that branch of the Millers were. His grandfather went out of his mind. He thought he was surrounded by big black spiders. They crawled over him and floated in the air about him. I hope I shall never go insane, Mrs. Dr. dear, and I do not think I will, because it is not a habit of the Bakers. But, if an all-wise Providence should decree it, I hope it will not take the form of big black spiders, for I loathe the animals. As for Mrs. Miller, I do not know whether she really deserves pity or not. There are some who say she just married Harrison to spite Richard Taylor, which seems to me a very peculiar reason for getting married. But then, of course, I am no judge of things matriomonial, Mrs. Dr. dear. And there is Cornelia Bryant at the gate, so I will put this blessed brown baby on his bed and get my knitting."
            </div>

        </div>
        <div class="col-3">
            <img src="7-7.jpg" width="140px">
            <br/>
            <div class="author">
                <i><strong>Author:</strong> Lucy Maud Montgomery
                    <br/>
                   <strong> Illustrator:</strong>  A. and W. A. J. Claus
                    <br/>
                    <strong>Country:</strong>  Canada 
                    <br/>
                    <strong>Language:</strong> English
                    <br/>
                    <strong>Genre:</strong> Novel
                    <br/>
                    <strong>Published:</strong> 1919
                </i>
            </div>    
        </div>
    </div>
   </div> `}


/////////////////eighth book /////////////

function eighthBookDisplay(event){
    event.preventDefault();
    let eighthBook=document.querySelector("#book");
    eighthBook.innerHTML=`      <div class="eighth-book" id="eighthBook">
    <br/>
    <h1 class="eighth-book-letter">Rilla of Ingleside</h1>
    <div class="row">
        <div class="col-9">
            <q><i>Isn't it nice to think that tomorrow is a new day with no mistakes in it yet</i></q><br/>
            Rilla of Ingleside (1921) is the eighth of nine books in the Anne of Green Gables series by Lucy Maud Montgomery, but was the sixth "Anne" novel in publication order. This book draws the focus back onto a single character, Anne and Gilbert's youngest daughter Bertha Marilla "Rilla" Blythe. It has a more serious tone, as it takes place during World War I and the three Blythe boys—Jem, Walter, and Shirley—along with Rilla's sweetheart Ken Ford, playmates Jerry Meredith and Carl Meredith—end up fighting in Europe with the Canadian Expeditionary Force.
            <button  class="eighth-chapter-button" id="eighthChapterButon" >First chapter</button>
            <div class="eighth-chapter" id="eighthChapter">
                <h3>First chapter</h3>
                It was a warm, golden-cloudy, lovable afternoon. In the big living-room at Ingleside Susan Baker sat down with a certain grim satisfaction hovering about her like an aura; it was four o'clock and Susan, who had been working incessantly since six that morning, felt that she had fairly earned an hour of repose and gossip. Susan just then was perfectly happy; everything had gone almost uncannily well in the kitchen that day. Dr. Jekyll had not been Mr. Hyde and so had not grated on her nerves; from where she sat she could see the pride of her heart—the bed of peonies of her own planting and culture, blooming as no other peony plot in Glen St. Mary ever did or could bloom, with peonies crimson, peonies silvery pink, peonies white as drifts of winter snow.

                Susan had on a new black silk blouse, quite as elaborate as anything Mrs. Marshall Elliott ever wore, and a white starched apron, trimmed with complicated crocheted lace fully five inches wide, not to mention insertion to match. Therefore Susan had all the comfortable consciousness of a well-dressed woman as she opened her copy of the Daily Enterprise and prepared to read the Glen "Notes" which, as Miss Cornelia had just informed her, filled half a column of it and mentioned almost everybody at Ingleside. There was a big, black headline on the front page of the Enterprise, stating that some Archduke Ferdinand or other had been assassinated at a place bearing the weird name of Sarajevo, but Susan tarried not over uninteresting, immaterial stuff like that; she was in quest of something really vital. Oh, here it was—"Jottings from Glen St. Mary." Susan settled down keenly, reading each one over aloud to extract all possible gratification from it.
                
                Mrs. Blythe and her visitor, Miss Cornelia—alias Mrs. Marshall Elliott—were chatting together near the open door that led to the veranda, through which a cool, delicious breeze was blowing, bringing whiffs of phantom perfume from the garden, and charming gay echoes from the vine-hung corner where Rilla and Miss Oliver and Walter were laughing and talking. Wherever Rilla Blythe was, there was laughter.
                
                There was another occupant of the living-room, curled up on a couch, who must not be overlooked, since he was a creature of marked individuality, and, moreover, had the distinction of being the only living thing whom Susan really hated.
                
                All cats are mysterious but Dr. Jekyll-and-Mr. Hyde—"Doc" for short—was trebly so. He was a cat of double personality—or else, as Susan vowed, he was possessed by the devil. To begin with, there had been something uncanny about the very dawn of his existence. Four years previously Rilla Blythe had had a treasured darling of a kitten, white as snow, with a saucy black tip to its tail, which she called Jack Frost. Susan disliked Jack Frost, though she could not or would not give any valid reason therefor.
                
                "Take my word for it, Mrs. Dr. dear," she was wont to say ominously, "that cat will come to no good."
                
                "But why do you think so?" Mrs. Blythe would ask.
                
                "I do not think—I know," was all the answer Susan would vouchsafe.
                
                With the rest of the Ingleside folk Jack Frost was a favourite; he was so very clean and well groomed, and never allowed a spot or stain to be seen on his beautiful white suit; he had endearing ways of purring and snuggling; he was scrupulously honest.
                
                And then a domestic tragedy took place at Ingleside. Jack Frost had kittens!
                
                It would be vain to try to picture Susan's triumph. Had she not always insisted that that cat would turn out to be a delusion and a snare? Now they could see for themselves!
                
                Rilla kept one of the kittens, a very pretty one, with peculiarly sleek glossy fur of a dark yellow crossed by orange stripes, and large, satiny, golden ears. She called it Goldie and the name seemed appropriate enough to the little frolicsome creature which, during its kittenhood, gave no indication of the sinister nature it really possessed. Susan, of course, warned the family that no good could be expected from any offspring of that diabolical Jack Frost; but Susan's Cassandra-like croakings were unheeded.
                
                The Blythes had been so accustomed to regard Jack Frost as a member of the male sex that they could not get out of the habit. So they continually used the masculine pronoun, although the result was ludicrous. Visitors used to be quite electrified when Rilla referred casually to "Jack and his kitten," or told Goldie sternly, "Go to your mother and get him to wash your fur."
                
                "It is not decent, Mrs. Dr. dear," poor Susan would say bitterly. She herself compromised by always referring to Jack as "it" or "the white beast," and one heart at least did not ache when "it" was accidentally poisoned the following winter.
                
                In a year's time "Goldie" became so manifestly an inadequate name for the orange kitten that Walter, who was just then reading Stevenson's story, changed it to Dr. Jekyll-and-Mr. Hyde. In his Dr. Jekyll mood the cat was a drowsy, affectionate, domestic, cushion-loving puss, who liked petting and gloried in being nursed and patted. Especially did he love to lie on his back and have his sleek, cream-coloured throat stroked gently while he purred in somnolent satisfaction. He was a notable purrer; never had there been an Ingleside cat who purred so constantly and so ecstatically.
                
                "The only thing I envy a cat is its purr," remarked Dr. Blythe once, listening to Doc's resonant melody. "It is the most contented sound in the world."
                
                Doc was very handsome; his every movement was grace; his poses magnificent. When he folded his long, dusky-ringed tail about his feet and sat him down on the veranda to gaze steadily into space for long intervals the Blythes felt that an Egyptian sphinx could not have made a more fitting Deity of the Portal.
                
                When the Mr. Hyde mood came upon him—which it invariably did before rain, or wind—he was a wild thing with changed eyes. The transformation always came suddenly. He would spring fiercely from a reverie with a savage snarl and bite at any restraining or caressing hand. His fur seemed to grow darker and his eyes gleamed with a diabolical light. There was really an unearthly beauty about him. If the change happened in the twilight all the Ingleside folk felt a certain terror of him. At such times he was a fearsome beast and only Rilla defended him, asserting that he was "such a nice prowly cat." Certainly he prowled.
                
                Dr. Jekyll loved new milk; Mr. Hyde would not touch milk and growled over his meat. Dr. Jekyll came down the stairs so silently that no one could hear him. Mr. Hyde made his tread as heavy as a man's. Several evenings, when Susan was alone in the house, he "scared her stiff," as she declared, by doing this. He would sit in the middle of the kitchen floor, with his terrible eyes fixed unwinkingly upon hers for an hour at a time. This played havoc with her nerves, but poor Susan really held him in too much awe to try to drive him out. Once she had dared to throw a stick at him and he had promptly made a savage leap towards her. Susan rushed out of doors and never attempted to meddle with Mr. Hyde again—though she visited his misdeeds upon the innocent Dr. Jekyll, chasing him ignominiously out of her domain whenever he dared to poke his nose in and denying him certain savoury tidbits for which he yearned.
                
                "'The many friends of Miss Faith Meredith, Gerald Meredith and James Blythe,'" read Susan, rolling the names like sweet morsels under her tongue, "'were very much pleased to welcome them home a few weeks ago from Redmond College. James Blythe, who was graduated in Arts in 1913, had just completed his first year in medicine.'"
                
                "Faith Meredith has really got to be the most handsomest creature I ever saw," commented Miss Cornelia above her filet crochet. "It's amazing how those children came on after Rosemary West went to the manse. People have almost forgotten what imps of mischief they were once. Anne, dearie, will you ever forget the way they used to carry on? It's really surprising how well Rosemary got on with them. She's more like a chum than a step-mother. They all love her and Una adores her. As for that little Bruce, Una just makes a perfect slave of herself to him. Of course, he is a darling. But did you ever see any child look as much like an aunt as he looks like his Aunt Ellen? He's just as dark and just as emphatic. I can't see a feature of Rosemary in him. Norman Douglas always vows at the top of his voice that the stork meant Bruce for him and Ellen and took him to the manse by mistake."
                
                "Bruce adores Jem," said Mrs Blythe. "When he comes over here he follows Jem about silently like a faithful little dog, looking up at him from under his black brows. He would do anything for Jem, I verily believe."
                
                "Are Jem and Faith going to make a match of it?"
                
                Mrs. Blythe smiled. It was well known that Miss Cornelia, who had been such a virulent man-hater at one time, had actually taken to match-making in her declining years.
                
                "They are only good friends yet, Miss Cornelia."
                
                "Very good friends, believe me," said Miss Cornelia emphatically. "I hear all about the doings of the young fry."
                
                "I have no doubt that Mary Vance sees that you do, Mrs. Marshall Elliott," said Susan significantly, "but I think it is a shame to talk about children making matches."
                
                "Children! Jem is twenty-one and Faith is nineteen," retorted Miss Cornelia. "You must not forget, Susan, that we old folks are not the only grown-up people in the world."
                
                Outraged Susan, who detested any reference to her age—not from vanity but from a haunting dread that people might come to think her too old to work—returned to her "Notes."
                
                "'Carl Meredith and Shirley Blythe came home last Friday evening from Queen's Academy. We understand that Carl will be in charge of the school at Harbour Head next year and we are sure he will be a popular and successful teacher.'"
                
                "He will teach the children all there is to know about bugs, anyhow," said Miss Cornelia. "He is through with Queen's now and Mr. Meredith and Rosemary wanted him to go right on to Redmond in the fall, but Carl has a very independent streak in him and means to earn part of his own way through college. He'll be all the better for it."
                
                "'Walter Blythe, who has been teaching for the past two years at Lowbridge, has resigned,'" read Susan. "'He intends going to Redmond this fall.'"
                
                "Is Walter quite strong enough for Redmond yet?" queried Miss Cornelia anxiously.
                
                "We hope that he will be by the fall," said Mrs. Blythe. "An idle summer in the open air and sunshine will do a great deal for him."
                
                "Typhoid is a hard thing to get over," said Miss Cornelia emphatically, "especially when one has had such a close shave as Walter had. I think he'd do well to stay out of college another year. But then he's so ambitious. Are Di and Nan going too?"
                
                "Yes. They both wanted to teach another year but Gilbert thinks they had better go to Redmond this fall."
                
                "I'm glad of that. They'll keep an eye on Walter and see that he doesn't study too hard. I suppose," continued Miss Cornelia, with a side glance at Susan, "that after the snub I got a few minutes ago it will not be safe for me to suggest that Jerry Meredith is making sheep's eyes at Nan."
                
                Susan ignored this and Mrs. Blythe laughed again.
                
                "Dear Miss Cornelia, I have my hands full, haven't I?—with all these boys and girls sweethearting around me? If I took it seriously it would quite crush me. But I don't—it is too hard yet to realize that they're grown up. When I look at those two tall sons of mine I wonder if they can possibly be the fat, sweet, dimpled babies I kissed and cuddled and sang to slumber the other day—only the other day, Miss Cornelia. Wasn't Jem the dearest baby in the old House of Dreams? and now he's a B.A. and accused of courting."
                
                "We're all growing older," sighed Miss Cornelia.
                
                "The only part of me that feels old," said Mrs. Blythe, "is the ankle I broke when Josie Pye dared me to walk the Barry ridge-pole in the Green Gables days. I have an ache in it when the wind is east. I won't admit that it is rheumatism, but it does ache. As for the children, they and the Merediths are planning a gay summer before they have to go back to studies in the fall. They are such a fun-loving little crowd. They keep this house in a perpetual whirl of merriment."
                
                "Is Rilla going to Queen's when Shirley goes back?"
                
                "It isn't decided yet. I rather fancy not. Her father thinks she is not quite strong enough—she has rather outgrown her strength—she's really absurdly tall for a girl not yet fifteen. I am not anxious to have her go—why, it would be terrible not to have a single one of my babies home with me next winter. Susan and I would fall to fighting with each other to break the monotony."
                
                Susan smiled at this pleasantry. The idea of her fighting with "Mrs. Dr. dear!"
                
                "Does Rilla herself want to go?" asked Miss Cornelia.
                
                "No. The truth is, Rilla is the only one of my flock who isn't ambitious. I really wish she had a little more ambition. She has no serious ideals at all—her sole aspiration seems to be to have a good time."
                
                "And why should she not have it, Mrs. Dr. dear?" cried Susan, who could not bear to hear a single word against anyone of the Ingleside folk, even from one of themselves. "A young girl should have a good time, and that I will maintain. There will be time enough for her to think of Latin and Greek."
                
                "I should like to see a little sense of responsibility in her, Susan. And you know yourself that she is abominably vain."
                
                "She has something to be vain about," retorted Susan. "She is the prettiest girl in Glen St. Mary. Do you think that all those over-harbour MacAllisters and Crawfords and Elliotts could scare up a skin like Rilla's in four generations? They could not. No, Mrs. Dr. dear, I know my place but I cannot allow you to run down Rilla. Listen to this, Mrs. Marshall Elliott."
                
                Susan had found a chance to get square with Miss Cornelia for her digs at the children's love affairs. She read the item with gusto.
                
                "'Miller Douglas has decided not to go West. He says old P.E.I. is good enough for him and he will continue to farm for his aunt, Mrs. Alec Davis.'"
                
                Susan looked keenly at Miss Cornelia.
                
                "I have heard, Mrs. Marshall Elliott, that Miller is courting Mary Vance."
                
                This shot pierced Miss Cornelia's armour. Her sonsy face flushed.
                
                "I won't have Miller Douglas hanging round Mary," she said crisply. "He comes of a low family. His father was a sort of outcast from the Douglases—they never really counted him in—and his mother was one of those terrible Dillons from the Harbour Head."
                
                "I think I have heard, Mrs. Marshall Elliott, that Mary Vance's own parents were not what you could call aristocratic."
                
                "Mary Vance has had a good bringing up and she is a smart, clever, capable girl," retorted Miss Cornelia. "She is not going to throw herself away on Miller Douglas, believe me! She knows my opinion on the matter and Mary has never disobeyed me yet."
                
                "Well, I do not think you need worry, Mrs. Marshall Elliott, for Mrs. Alec Davis is as much against it as you could be, and says no nephew of hers is ever going to marry a nameless nobody like Mary Vance."
                
                Susan returned to her mutton, feeling that she had got the best of it in this passage of arms, and read another "note."
                
                "'We are pleased to hear that Miss Oliver has been engaged as teacher for another year. Miss Oliver will spend her well-earned vacation at her home in Lowbridge.'"
                
                "I'm so glad Gertrude is going to stay," said Mrs. Blythe. "We would miss her horribly. And she has an excellent influence over Rilla who worships her. They are chums, in spite of the difference in their ages."
                
                "I thought I heard she was going to be married?"
                
                "I believe it was talked of but I understand it is postponed for a year."
                
                "Who is the young man?"
                
                "Robert Grant. He is a young lawyer in Charlottetown. I hope Gertrude will be happy. She has had a sad life, with much bitterness in it, and she feels things with a terrible keenness. Her first youth is gone and she is practically alone in the world. This new love that has come into her life seems such a wonderful thing to her that I think she hardly dares believe in its permanence. When her marriage had to be put off she was quite in despair—though it certainly wasn't Mr. Grant's fault. There were complications in the settlement of his father's estate—his father died last winter—and he could not marry till the tangles were unravelled. But I think Gertrude felt it was a bad omen and that her happiness would somehow elude her yet."
                
                "It does not do, Mrs. Dr. dear, to set your affections too much on a man," remarked Susan solemnly.
                
                "Mr. Grant is quite as much in love with Gertrude as she is with him, Susan. It is not he whom she distrusts—it is fate. She has a little mystic streak in her—I suppose some people would call her superstitious. She has an odd belief in dreams and we have not been able to laugh it out of her. I must own, too, that some of her dreams—but there, it would not do to let Gilbert hear me hinting such heresy. What have you found of much interest, Susan?"
                
                Susan had given an exclamation.
                
                "Listen to this, Mrs. Dr. dear. 'Mrs. Sophia Crawford has given up her house at Lowbridge and will make her home in future with her niece, Mrs. Albert Crawford.' Why that is my own cousin Sophia, Mrs. Dr. dear. We quarrelled when we were children over who should get a Sunday-school card with the words 'God is Love,' wreathed in rosebuds, on it, and have never spoken to each other since. And now she is coming to live right across the road from us."
                
                "You will have to make up the old quarrel, Susan. It will never do to be at outs with your neighbours."
                
                "Cousin Sophia began the quarrel, so she can begin the making up also, Mrs. Dr. dear," said Susan loftily. "If she does I hope I am a good enough Christian to meet her half-way. She is not a cheerful person and has been a wet blanket all her life. The last time I saw her, her face had a thousand wrinkles—maybe more, maybe less—from worrying and foreboding. She howled dreadful at her first husband's funeral but she married again in less than a year. The next note, I see, describes the special service in our church last Sunday night and says the decorations were very beautiful."
                
                "Speaking of that reminds me that Mr. Pryor strongly disapproves of flowers in church," said Miss Cornelia. "I always said there would be trouble when that man moved here from Lowbridge. He should never have been put in as elder—it was a mistake and we shall live to rue it, believe me! I have heard that he has said that if the girls continue to 'mess up the pulpit with weeds' that he will not go to church."
                
                "The church got on very well before old Whiskers-on-the-moon came to the Glen and it is my opinion it will get on without him after he is gone," said Susan.
                
                "Who in the world ever gave him that ridiculous nickname?" asked Mrs. Blythe.
                
                "Why, the Lowbridge boys have called him that ever since I can remember, Mrs. Dr. dear—I suppose because his face is so round and red, with that fringe of sandy whisker about it. It does not do for anyone to call him that in his hearing, though, and that you may tie to. But worse than his whiskers, Mrs. Dr. dear, he is a very unreasonable man and has a great many queer ideas. He is an elder now and they say he is very religious; but I can well remember the time, Mrs. Dr. dear, twenty years ago, when he was caught pasturing his cow in the Lowbridge graveyard. Yes, indeed, I have not forgotten that, and I always think of it when he is praying in meeting. Well, that is all the notes and there is not much else in the paper of any importance. I never take much interest in foreign parts. Who is this Archduke man who has been murdered?"
                
                "What does it matter to us?" asked Miss Cornelia, unaware of the hideous answer to her question which destiny was even then preparing. "Somebody is always murdering or being murdered in those Balkan States. It's their normal condition and I don't really think that our papers ought to print such shocking things. The Enterprise is getting far too sensational with its big headlines. Well, I must be getting home. No, Anne dearie, it's no use asking me to stay to supper. Marshall has got to thinking that if I'm not home for a meal it's not worth eating—just like a man. So off I go. Merciful goodness, Anne dearie, what is the matter with that cat? Is he having a fit?"—this, as Doc suddenly bounded to the rug at Miss Cornelia's feet, laid back his ears, swore at her, and then disappeared with one fierce leap through the window.
                
                "Oh, no. He's merely turning into Mr. Hyde—which means that we shall have rain or high wind before morning. Doc is as good as a barometer."
                
                "Well, I am thankful he has gone on the rampage outside this time and not into my kitchen," said Susan. "And I am going out to see about supper. With such a crowd as we have at Ingleside now it behooves us to think about our meals betimes."
            </div>

        </div>
        <div class="col-3">
            <img src="8-8.jpg" width="140px">
            <br/>
            <div class="author">
                <i><strong>Author:</strong> Lucy Maud Montgomery
                    <br/>
                   <strong> Illustrator:</strong>  A. and W. A. J. Claus
                    <br/>
                    <strong>Country:</strong>  Canada 
                    <br/>
                    <strong>Language:</strong> English
                    <br/>
                    <strong>Genre:</strong> Novel
                    <br/>
                    <strong>Published:</strong> 1921
                </i>
            </div>    
        </div>
    </div>
   </div> `}


///////////////////Main button add event listener///////

let first=document.querySelector("#firstBookButton");
first.addEventListener("click",firstBookDisplay); 

let second=document.querySelector("#secondBookButton");
second.addEventListener("click",secondBookDisplay);

let third=document.querySelector("#thirdBookButton");
third.addEventListener("click",thirdBookDisplay);

let forth=document.querySelector("#forthBookButton");
forth.addEventListener("click",forthBookDisplay); 

let fifth=document.querySelector("#fifthBookButton");
fifth.addEventListener("click",fifthBookDisplay); 

let sixth=document.querySelector("#sixthBookButton");
sixth.addEventListener("click",sixthBookDisplay); 

let seventh=document.querySelector("#seventhBookButton");
seventh.addEventListener("click",seventhBookDisplay); 

let eighth=document.querySelector("#eighthBookButton");
eighth.addEventListener("click",eighthBookDisplay); 


///////////////////// first chapter buttons////////////
let firstchapter=document.querySelector("#book");
firstchapter.addEventListener("click",firstchapterDisplay); 

/////////home button
function homeButtonFunction(){
    location.reload();
}
let homebutton=document.querySelector("#homeButton");
homebutton.addEventListener("click",homeButtonFunction)