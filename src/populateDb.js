const db = require('./db');




const populate = () => {
    db.add('posts', {
        title: '✨ Sparkles and new year ...',
        content: 'Sigh view am high neat half to what. Sent late held than set why wife our. If an blessing building steepest. Agreement distrusts mrs six affection satisfied. Day blushes visitor end company old prevent chapter. Consider declared out expenses her concerns. No at indulgence conviction particular unsatiable boisterous discretion. Direct enough off others say eldest may exeter she. Possible all ignorant supplied get settling marriage recurred. ',
        contentAfterReadMore: 'On insensible possession oh particular attachment at excellence in. The books arose but miles happy she. It building contempt or interest children mistress of unlocked no. Offending she contained mrs led listening resembled. Delicate marianne absolute men dashwood landlord and offended. Suppose cottage between and way. Minuter him own clothes but observe country. Agreement far boy otherwise rapturous incommode favourite. ',
        slug: 'post-1',
        imageUrl: '/images/sparkler.jpg',
        authorName: 'Kathryn Carver',
        authorAvatar: '/images/avatar.png',
        datePost: '12.12.2012',
        category: 'Events',
        id: 0,
    });
    db.add('posts', {
        title: '🎃 Halloweend this year ...',
        content: 'On it differed repeated wandered required in. Then girl neat why yet knew rose spot. Moreover property we he kindness greatest be oh striking laughter. In me he at collecting affronting principles apartments. Has visitor law attacks pretend you calling own excited painted. Contented attending smallness it oh ye unwilling. Turned favour man two but lovers. Suffer should if waited common person little oh. Improved civility graceful sex few smallest screened settling. Likely active her warmly has. ',
        contentAfterReadMore: 'Repulsive questions contented him few extensive supported. Of remarkably thoroughly he appearance in. Supposing tolerably applauded or of be. Suffering unfeeling so objection agreeable allowance me of. Ask within entire season sex common far who family. As be valley warmth assure on. Park girl they rich hour new well way you. Face ye be me been room we sons fond.  ',
        slug: 'post-2',
        imageUrl: '/images/hallowen.jpg',
        authorName: 'Humza Rosas',
        authorAvatar: '/images/avatar.png',
        datePost: '12.10.2012',
        category: 'Events',
        id: 1,
    });
    db.add('posts', {
        title: '🔥 Can you have a fire in a tent?',
        content: 'Resolution possession discovered surrounded advantages has but few add. Yet walls times spoil put. Be it reserved contempt rendered smallest. Studied to passage it mention calling believe an. Get ten horrible remember pleasure two vicinity. Far estimable extremely middleton his concealed perceived principle. Any nay pleasure entrance prepared her. ',
        contentAfterReadMore: 'Any delicate you how kindness horrible outlived servants. You high bed wish help call draw side. Girl quit if case mr sing as no have. At none neat am do over will. Agreeable promotion eagerness as we resources household to distrusts. Polite do object at passed it is. Small for ask shade water manor think men begin. ',
        slug: 'post-3',
        imageUrl: '/images/fire-tent.jpg',
        authorName: 'Shakira Soto',
        authorAvatar: '/images/avatar.png',
        datePost: '04.06.2020',
        category: 'Mountains',
        id: 2,
    });
    db.add('posts', {
        title: '❤️ Love is in the air?',
        content: 'As it so contrasted oh estimating instrument. Size like body some one had. Are conduct viewing boy minutes warrant expense. Tolerably behaviour may admitting daughters offending her ask own. Praise effect wishes change way and any wanted. Lively use looked latter regard had. Do he it part more last in. Merits ye if mr narrow points. Melancholy particular devonshire alteration it favourable appearance up.  ',
        contentAfterReadMore: 'Put all speaking her delicate recurred possible. Set indulgence inquietude discretion insensible bed why announcing. Middleton fat two satisfied additions. So continued he or commanded household smallness delivered. Door poor on do walk in half. Roof his head the what.  ',
        slug: 'post-4',
        imageUrl: '/images/love.jpg',
        authorName: 'Jago Lynn',
        authorAvatar: '/images/avatar.png',
        datePost: '09.29.2020',
        category: 'Love',
        id: 3,
    });
};

module.exports = populate