// ---------- 题库数据（20题，每题提供性格8维分数 + 定位4维分数）----------
const baseQuestions = [
    // 压力与挑战应对（4题）
    {
        text: "你更享受哪种游戏时刻？",
        options: [
            "单枪匹马冲入敌阵，连杀多人",
            "用技能和走位戏耍对手，让他们摸不着头脑",
            "制定完美战术，队友配合行云流水",
            "在后方架枪，确保队友不会被绕后偷掉"
        ],
        // 性格: [闪电突击, 独行诡诈, 战略指挥, 科技掌控, 治愈守护, 情报猎手, 荒野生存, 创新先锋]
        personality: [[5,2,1,1,1,1,1,1], [2,5,1,1,1,2,1,2], [1,2,5,1,1,2,1,2], [1,1,1,2,2,5,1,1]],
        // 定位: [决斗, 先锋, 控场, 哨位]
        role: [[5,1,1,1], [2,2,1,2], [1,2,5,2], [1,1,2,5]]
    },
    {
        text: "面对一个棘手的困难任务，你的第一反应是？",
        options: [
            "兴奋，立刻投入行动",
            "先观察局势，找到漏洞再出手",
            "制定详细计划，分配好资源再开始",
            "问问有经验的人，或者找人一起商量"
        ],
        personality: [[5,2,1,1,1,1,1,1], [2,5,2,1,1,3,1,1], [1,1,5,2,1,2,1,2], [1,1,2,1,5,2,1,3]],
        role: [[4,2,1,1], [2,3,2,2], [1,2,5,2], [1,1,1,5]]
    },
    {
        text: "当你陷入僵局/瓶颈时，你通常会？",
        options: [
            "强行突破，靠毅力硬刚过去",
            "换个思路，用别人想不到的方法",
            "冷静分析，找出问题根源",
            "暂停一下，等状态恢复再继续"
        ],
        personality: [[5,1,2,1,1,1,2,1], [1,5,1,1,1,2,1,2], [1,2,5,3,1,2,1,1], [1,1,1,1,5,3,1,1]],
        role: [[5,1,1,1], [2,2,1,2], [1,2,5,2], [1,1,2,5]]
    },
    {
        text: "在团队比赛中，你更看重什么？",
        options: [
            "自己打出亮眼表现",
            "用出人意料的战术帮助队伍",
            "团队配合流畅，战术执行到位",
            "每个人都能发挥自己的作用"
        ],
        personality: [[5,2,2,1,1,1,1,1], [2,5,1,1,1,1,1,2], [1,1,5,1,2,1,1,2], [1,1,2,1,5,1,2,3]],
        role: [[5,1,1,1], [1,3,2,2], [1,2,5,2], [1,1,1,5]]
    },

    // 合作与冲突处理（4题）
    {
        text: "队伍里有成员状态不佳/拖后腿时，你会怎么做？",
        options: [
            "自己更努力，争取弥补差距",
            "给ta安排一个简单但关键的任务",
            "鼓励ta，帮ta找回状态",
            "默默帮ta补位，不让敌人抓到破绽"
        ],
        personality: [[5,2,1,1,1,1,1,1], [1,5,2,1,1,1,1,2], [1,1,5,1,5,1,1,2], [1,1,1,1,2,5,2,1]],
        role: [[5,1,1,1], [1,2,2,3], [1,1,2,5], [1,1,2,5]]
    },
    {
        text: "你和朋友对某件事看法完全不同，你通常会？",
        options: [
            "据理力争，我觉得对的就会坚持",
            "表面同意，但心里还是按自己想法来",
            "理性分析各自的逻辑，求同存异",
            "先听对方的想法，再做决定"
        ],
        personality: [[5,1,2,1,1,1,1,1], [2,5,1,1,1,1,1,1], [1,1,5,3,1,2,1,2], [1,1,1,1,5,2,1,2]],
        role: [[3,1,2,2], [2,3,1,2], [1,2,4,3], [1,1,2,5]]
    },
    {
        text: "在团队合作中，你最讨厌哪种情况？",
        options: [
            "队友畏首畏尾，不敢打",
            "队友不沟通，各自为战",
            "队友乱放技能，破坏阵型",
            "队友情绪化，影响团队氛围"
        ],
        personality: [[5,1,2,1,1,1,1,1], [2,5,1,1,1,1,1,1], [1,1,5,2,1,1,1,2], [1,1,1,1,5,1,1,3]],
        role: [[5,1,1,1], [1,4,1,2], [1,1,5,2], [1,1,1,5]]
    },
    {
        text: "你更愿意在团队中扮演什么角色？",
        options: [
            "冲在最前面，给大家开路",
            "在侧面牵制，创造机会",
            "在后排指挥，掌控全局",
            "做好后勤，确保每个人都能安心输出"
        ],
        personality: [[5,2,1,1,1,1,1,1], [2,5,1,1,1,2,1,2], [1,1,5,1,1,2,1,2], [1,1,1,2,5,1,2,3]],
        role: [[5,1,1,1], [1,4,1,2], [1,1,5,2], [1,1,1,5]]
    },

    // 日常与偏好（5题）
    {
        text: "休息日，你更喜欢怎么度过？",
        options: [
            "户外运动，挑战极限",
            "看烧脑电影或研究感兴趣的小众话题",
            "整理房间，或者玩需要策略的游戏",
            "和朋友聚会，或者做点帮助别人的事"
        ],
        personality: [[5,2,1,1,1,1,2,1], [1,5,1,2,1,2,1,2], [1,1,5,3,1,2,1,1], [1,1,1,1,5,1,1,5]],
        role: [[3,1,1,2], [1,3,2,2], [1,2,4,2], [1,1,1,5]]
    },
    {
        text: "哪种颜色组合更吸引你？",
        options: [
            "红色/橙色 - 热情奔放",
            "紫色/黑色 - 神秘莫测",
            "蓝色/白色 - 冷静理性",
            "绿色/大地色 - 自然平和"
        ],
        personality: [[5,1,1,1,1,1,1,1], [1,5,1,1,1,1,1,2], [1,1,5,3,1,2,1,1], [1,1,1,1,5,1,5,3]],
        role: [[3,1,1,2], [1,2,3,2], [1,2,4,2], [1,1,2,5]]
    },
    {
        text: "哪种类型的电影/故事更吸引你？",
        options: [
            "动作/冒险 - 全程高能",
            "悬疑/反转 - 猜不到结局",
            "科幻/史诗 - 宏大世界观",
            "治愈/成长 - 温暖人心"
        ],
        personality: [[5,2,1,1,1,1,1,1], [1,5,1,1,1,2,1,2], [1,1,5,3,1,2,1,2], [1,1,1,1,5,1,2,5]],
        role: [[3,1,1,2], [1,3,2,2], [1,2,4,2], [1,1,1,5]]
    },
    {
        text: "你更欣赏哪种品质的人？",
        options: [
            "勇敢果断，敢于冒险",
            "聪明机智，总能出奇制胜",
            "沉稳可靠，做事滴水不漏",
            "温柔善良，让人感到安心"
        ],
        personality: [[5,2,1,1,1,1,1,1], [1,5,1,1,1,1,1,2], [1,1,5,2,1,2,1,2], [1,1,1,1,5,1,2,5]],
        role: [[3,1,1,2], [1,3,2,2], [1,2,4,2], [1,1,1,5]]
    },
    {
        text: "如果让你选择一项超能力，你会选？",
        options: [
            "超级速度/瞬移",
            "隐身/幻象",
            "预知未来/读心术",
            "治愈/复活"
        ],
        personality: [[5,2,1,1,1,1,1,1], [2,5,1,1,1,2,1,2], [1,1,5,3,1,3,1,1], [1,1,1,1,5,1,2,5]],
        role: [[4,1,1,2], [2,2,2,2], [1,3,3,2], [1,1,1,5]]
    },

    // 价值观与自我认知（4题）
    {
        text: "你更希望自己成为一个怎样的人？",
        options: [
            "敢为人先的开拓者",
            "出其不意的创新者",
            "可靠稳重的领导者",
            "温暖有力的守护者"
        ],
        personality: [[5,2,2,1,1,1,1,1], [1,5,1,2,1,1,1,2], [1,1,5,1,1,2,1,2], [1,1,1,1,5,1,2,5]],
        role: [[4,1,1,2], [1,3,2,2], [1,2,5,2], [1,1,1,5]]
    },
    {
        text: "当朋友遇到困难向你倾诉时，你通常会？",
        options: [
            "带ta去做一些刺激的事，转移注意力",
            "帮ta分析局势，找出解决方案",
            "默默听ta说完，给ta一个拥抱",
            "分享自己类似的经历，让ta知道不是一个人"
        ],
        personality: [[5,1,2,1,1,1,2,1], [1,2,5,2,1,2,1,2], [1,1,1,1,5,1,1,5], [1,1,1,1,2,1,5,3]],
        role: [[3,1,1,2], [1,3,3,2], [1,1,1,5], [1,1,2,5]]
    },
    {
        text: "你觉得成功最重要的因素是？",
        options: [
            "敢于冒险，抓住机会",
            "灵活变通，不拘一格",
            "持续积累，厚积薄发",
            "良好的人际关系和团队支持"
        ],
        personality: [[5,2,1,1,1,1,1,1], [2,5,1,1,1,1,1,2], [1,1,5,2,1,2,2,1], [1,1,2,1,5,1,1,5]],
        role: [[3,1,1,2], [1,3,2,2], [1,2,4,2], [1,1,1,5]]
    },
    {
        text: "如果要选一句话作为座右铭，你会选？",
        options: [
            "\"勇者无惧\"",
            "\"出奇制胜\"",
            "\"谋定后动\"",
            "\"赠人玫瑰，手有余香\""
        ],
        personality: [[5,1,2,1,1,1,1,1], [1,5,1,1,1,2,1,2], [1,1,5,3,1,3,1,1], [1,1,1,1,5,1,2,5]],
        role: [[4,1,1,2], [1,2,3,2], [1,2,5,2], [1,1,1,5]]
    },

    // 情绪与风格（3题）
    {
        text: "当你感到压力很大时，你通常会？",
        options: [
            "去运动/打游戏，把压力释放出来",
            "自己一个人待着，慢慢消化",
            "找人聊聊天，说出来就好了",
            "写下来或做计划，梳理清楚"
        ],
        personality: [[5,1,1,1,1,1,2,1], [1,5,1,1,1,2,1,2], [1,1,1,1,5,1,2,5], [1,1,5,3,1,2,1,1]],
        role: [[3,1,1,2], [1,2,2,3], [1,1,1,5], [1,2,5,2]]
    },
    {
        text: "在陌生社交场合，你通常？",
        options: [
            "主动活跃气氛，成为话题中心",
            "找个角落观察别人，再决定和谁交流",
            "和几个熟悉的朋友待在一起",
            "顺其自然，随缘交流"
        ],
        personality: [[5,1,2,1,2,1,1,2], [1,5,1,1,1,3,1,2], [1,1,2,1,5,1,2,5], [1,1,1,1,1,1,5,5]],
        role: [[3,1,1,2], [1,4,1,2], [1,1,1,5], [1,1,2,4]]
    },
    {
        text: "哪种描述更符合你的生活态度？",
        options: [
            "\"活在当下，享受每一刻\"",
            "\"保持神秘，不轻易被看透\"",
            "\"未雨绸缪，做好准备\"",
            "\"与人为善，相信美好\""
        ],
        personality: [[5,2,1,1,1,1,1,1], [1,5,1,1,1,2,1,2], [1,1,5,3,1,3,1,1], [1,1,1,1,5,1,2,5]],
        role: [[3,1,1,2], [1,2,3,2], [1,2,5,2], [1,1,1,5]]
    }
];

// 打乱题目顺序
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}
const questions = shuffleArray([...baseQuestions]);

// ---------- 特工库（28位，包含名称、描述、主要位置、原型权重、阈值）----------
const agents = [
    // 闪电突击者
    { name: "捷风 (Jett)", desc: "身手敏捷，自信张扬，是队伍里最锋利的尖刀。", role: "duelist", archetypes: { lightningStriker: 1.0, creativePioneer: 0.2 }, threshold: 55 },
    { name: "不死鸟 (Phoenix)", desc: "你像不死鸟一样闪耀全场，充满自信和领导力。", role: "duelist", archetypes: { lightningStriker: 1.0, strategicCommander: 0.3 }, threshold: 45 },
    { name: "芮娜 (Reyna)", desc: "侵略如火，享受收割灵魂的快感。", role: "duelist", archetypes: { lightningStriker: 1.0 }, threshold: 45 },
    { name: "雷兹 (Raze)", desc: "巴西的爆破专家，热情奔放，善于制造混乱。", role: "duelist", archetypes: { lightningStriker: 0.9, creativePioneer: 0.3 }, threshold: 35 },
    { name: "霓虹 (Neon)", desc: "速度极快，精力充沛。你喜欢快节奏的对抗。", role: "duelist", archetypes: { lightningStriker: 1.0 }, threshold: 35 },
    { name: "一决 (Iso)", desc: "冷静的决斗者，寻求一对一的公平对决。", role: "duelist", archetypes: { lightningStriker: 0.7, loneTrickster: 0.3 }, threshold: 25 },
    { name: "幻棱 (Waylay)", desc: "新晋决斗者，善于利用位移和闪光创造机会。", role: "duelist", archetypes: { lightningStriker: 0.6, creativePioneer: 0.6 }, threshold: 25 },

    // 独行诡诈者
    { name: "夜戮 (Yoru)", desc: "来无影去无踪的独行侠，喜欢用诡计戏耍对手。", role: "duelist", archetypes: { loneTrickster: 1.0 }, threshold: 45 },
    { name: "幽影 (Omen)", desc: "神秘莫测的暗影，从阴影中发起攻击。", role: "controller", archetypes: { loneTrickster: 1.0, intelHunter: 0.2 }, threshold: 45 },
    { name: "黑梦 (Fade)", desc: "利用梦魇力量追踪敌人，神秘而敏锐。", role: "initiator", archetypes: { loneTrickster: 0.8, intelHunter: 0.5 }, threshold: 35 },

    // 战略指挥官
    { name: "炼狱 (Brimstone)", desc: "天生的领导者，可靠的指挥官。", role: "controller", archetypes: { strategicCommander: 1.0 }, threshold: 55 },
    { name: "猎枭 (Sova)", desc: "团队的'眼睛'，冷静、可靠。", role: "initiator", archetypes: { strategicCommander: 0.8, intelHunter: 0.6 }, threshold: 45 },
    { name: "KAY/O", desc: "为战斗而生的机器人，擅长压制敌方技能。", role: "initiator", archetypes: { strategicCommander: 0.7, wildSurvivor: 0.3 }, threshold: 35 },
    { name: "钛狐 (Tejo)", desc: "新晋先锋，技能组侧重于区域压制和团队配合。", role: "initiator", archetypes: { strategicCommander: 0.5, creativePioneer: 0.5 }, threshold: 25 },

    // 科技掌控者
    { name: "蝰蛇 (Viper)", desc: "掌握毒气的科学家，冷酷而致命。", role: "controller", archetypes: { techController: 1.0, strategicCommander: 0.4 }, threshold: 55 },
    { name: "奇乐 (Killjoy)", desc: "来自德国的天才发明家，善于利用科技。", role: "sentinel", archetypes: { techController: 1.0 }, threshold: 45 },
    { name: "尚勃勒 (Chamber)", desc: "优雅的法国武器设计师，追求高效防守反击。", role: "sentinel", archetypes: { techController: 0.8, lightningStriker: 0.2 }, threshold: 35 },
    { name: "维斯 (Vyse)", desc: "操纵液态金属，擅长设置陷阱。", role: "sentinel", archetypes: { techController: 0.9, intelHunter: 0.2 }, threshold: 25 },
    { name: "禁灭 (Veto)", desc: "最新的哨卫之一，技能组侧重于区域封锁。", role: "sentinel", archetypes: { techController: 0.7, wildSurvivor: 0.3 }, threshold: 25 },

    // 治愈守护者
    { name: "贤者 (Sage)", desc: "团队最坚实的后盾，温柔而坚韧。", role: "sentinel", archetypes: { healingGuardian: 1.0 }, threshold: 55 },
    { name: "斯凯 (Skye)", desc: "来自澳洲的自然之力，既能侦察又能治疗。", role: "initiator", archetypes: { healingGuardian: 0.8, creativePioneer: 0.4 }, threshold: 35 },
    { name: "迷核 (Miks)", desc: "活力满满的气氛制造者，在关键时刻鼓舞队友。", role: "controller", archetypes: { creativePioneer: 0.9, healingGuardian: 0.7 }, threshold: 40 },

    // 情报猎手
    { name: "零 (Cypher)", desc: "情报贩子，喜欢用陷阱布下天罗地网。", role: "sentinel", archetypes: { intelHunter: 1.0 }, threshold: 45 },
    { name: "星礈 (Astra)", desc: "星界守护者，拥有宏观控图能力。", role: "controller", archetypes: { intelHunter: 0.7, techController: 0.5 }, threshold: 35 },
    { name: "海神 (Harbor)", desc: "掌控水之力量，灵活多变。", role: "controller", archetypes: { intelHunter: 0.5, creativePioneer: 0.5 }, threshold: 25 },

    // 荒野生存者
    { name: "铁臂 (Breach)", desc: "瑞典机械改造人，技能强力直接。", role: "initiator", archetypes: { wildSurvivor: 1.0 }, threshold: 45 },
    { name: "钢锁 (Deadlock)", desc: "强硬哨卫，用纳米线限制敌人。", role: "sentinel", archetypes: { wildSurvivor: 0.9, techController: 0.3 }, threshold: 35 },
    { name: "盖克 (Gekko)", desc: "和'小伙伴'们是最好的搭档。", role: "initiator", archetypes: { wildSurvivor: 0.5, creativePioneer: 0.7 }, threshold: 25 },

    // 创新先锋者
    { name: "暮蝶 (Clove)", desc: "不惧死亡，死后仍能为团队封烟。", role: "controller", archetypes: { creativePioneer: 1.0, lightningStriker: 0.3 }, threshold: 45 },
];

// 8种原型的索引顺序（与personality分数数组顺序一致）
const archetypeKeys = [
    'lightningStriker',   // 0
    'loneTrickster',      // 1
    'strategicCommander', // 2
    'techController',     // 3
    'healingGuardian',    // 4
    'intelHunter',        // 5
    'wildSurvivor',       // 6
    'creativePioneer'     // 7
];

// 4种位置的索引顺序（与role分数数组顺序一致）
const roleKeys = ['duelist', 'initiator', 'controller', 'sentinel'];

// ---------- DOM 元素 ----------
const quizSection = document.getElementById('quiz-section');
const resultSection = document.getElementById('result-section');
const loadingSection = document.getElementById('loading-section');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-btn');
const restartBtn = document.getElementById('restart-btn');
const currentQNumSpan = document.getElementById('current-question-num');
const totalQSpan = document.getElementById('total-questions');
const progressFill = document.getElementById('progress-fill');
const resultTitle = document.getElementById('result-title');
const resultDesc = document.getElementById('result-description');
const startSection = document.getElementById('start-section');
const startBtn = document.getElementById('start-btn');

// ---------- 状态 ----------
let currentIndex = 0;
const totalQuestions = questions.length;
let userAnswers = new Array(totalQuestions).fill(null);
let canAutoJump = true;
let jumpTimer = null;
totalQSpan.textContent = totalQuestions;

// ---------- 渲染题目 ----------
function renderQuestion() {
    if (jumpTimer) { clearTimeout(jumpTimer); jumpTimer = null; }
    canAutoJump = true;
    
    const q = questions[currentIndex];
    questionText.textContent = q.text;
    const selectedIdx = userAnswers[currentIndex];
    
    let htmlStr = '';
    q.options.forEach((optText, idx) => {
        const checkedAttr = (selectedIdx === idx) ? 'checked' : '';
        const selectedClass = (selectedIdx === idx) ? 'selected' : '';
        htmlStr += `<div class="option-card ${selectedClass}" data-option-index="${idx}">
                        <input type="radio" name="quiz-option" value="${idx}" id="opt_${idx}" ${checkedAttr}>
                        <label for="opt_${idx}" class="option-text">${optText}</label>
                    </div>`;
    });
    optionsContainer.innerHTML = htmlStr;
    
    document.querySelectorAll('.option-card').forEach(card => {
        card.addEventListener('click', function(e) {
            if (!canAutoJump) return;
            const radio = this.querySelector('input[type="radio"]');
            const selectedValue = parseInt(radio.value);
            userAnswers[currentIndex] = selectedValue;
            
            document.querySelectorAll('.option-card').forEach(el => {
                const idx = parseInt(el.dataset.optionIndex);
                if (idx === selectedValue) {
                    el.classList.add('selected');
                    el.querySelector('input').checked = true;
                } else {
                    el.classList.remove('selected');
                    el.querySelector('input').checked = false;
                }
            });
            
            canAutoJump = false;
            if (currentIndex === totalQuestions - 1) {
                jumpTimer = setTimeout(() => { showResult(); }, 200);
            } else {
                jumpTimer = setTimeout(() => { currentIndex++; renderQuestion(); }, 200);
            }
        });
    });
    
    currentQNumSpan.textContent = currentIndex + 1;
    progressFill.style.width = `${((currentIndex + 1) / totalQuestions) * 100}%`;
    prevBtn.disabled = (currentIndex === 0);
    nextBtn.textContent = (currentIndex === totalQuestions - 1) ? '最后一题 ✓' : '下一题 →';
}

function goToPrev() { 
    if (currentIndex > 0) { clearTimeout(jumpTimer); canAutoJump = true; currentIndex--; renderQuestion(); } 
}
function goToNext() { 
    if (currentIndex < totalQuestions - 1) { clearTimeout(jumpTimer); canAutoJump = true; currentIndex++; renderQuestion(); } 
}

// ---------- 双层匹配结果计算（综合评分）----------
function showResult() {
    clearTimeout(jumpTimer);
    
    // 1. 累加性格分数（8维）和定位分数（4维）
    let personalityScores = [0,0,0,0,0,0,0,0];
    let roleScores = [0,0,0,0];
    
    for (let i = 0; i < totalQuestions; i++) {
        const ans = userAnswers[i];
        if (ans !== null) {
            const pScores = questions[i].personality[ans];
            const rScores = questions[i].role[ans];
            personalityScores = personalityScores.map((v, idx) => v + pScores[idx]);
            roleScores = roleScores.map((v, idx) => v + rScores[idx]);
        } else {
            personalityScores = personalityScores.map(v => v + 1);
            roleScores = roleScores.map(v => v + 1);
        }
    }
    
    quizSection.classList.add('hidden');
    loadingSection.classList.remove('hidden');
    
    setTimeout(() => {
        // 2. 归一化用户分数
        function normalize(arr) {
            const sum = arr.reduce((a,b) => a + b, 0);
            if (sum === 0) return arr.map(() => 0);
            return arr.map(v => v / sum);
        }
        const userPersonalityNorm = normalize(personalityScores);
        const userRoleNorm = normalize(roleScores);
        
        // 3. 为每位特工计算综合匹配度分数
        let bestAgent = null;
        let bestScore = -1;
        
        agents.forEach(agent => {
            // 3.1 构建特工的理想性格向量（8维）
            const agentPersonalityVec = archetypeKeys.map(key => agent.archetypes[key] || 0);
            
            // 3.2 计算余弦相似度 (性格部分)
            let dotProduct = 0;
            let userMag = 0, agentMag = 0;
            for (let i = 0; i < 8; i++) {
                dotProduct += userPersonalityNorm[i] * agentPersonalityVec[i];
                userMag += userPersonalityNorm[i] * userPersonalityNorm[i];
                agentMag += agentPersonalityVec[i] * agentPersonalityVec[i];
            }
            userMag = Math.sqrt(userMag);
            agentMag = Math.sqrt(agentMag);
            let personalitySim = 0;
            if (userMag > 0 && agentMag > 0) {
                personalitySim = dotProduct / (userMag * agentMag);
            }
            
            // 3.3 位置匹配奖励（用户位置得分与特工主要位置的契合度）
            const roleIdx = roleKeys.indexOf(agent.role);
            let roleBonus = 0;
            if (roleIdx !== -1) {
                roleBonus = userRoleNorm[roleIdx] * 0.3; // 位置权重占30%
            }
            
            // 3.4 阈值奖励
            const personalityTotal = personalityScores.reduce((a,b) => a + b, 0);
            const thresholdBonus = (personalityTotal >= agent.threshold) ? 0.1 : 0;
            
            // 3.5 综合分数 = 性格相似度(60%) + 位置奖励(30%) + 阈值奖励(10%)
            const totalScore = (personalitySim * 0.6) + roleBonus + thresholdBonus;
            
            if (totalScore > bestScore) {
                bestScore = totalScore;
                bestAgent = agent;
            }
        });
        
        // 4. 显示结果
        if (bestAgent) {
            resultTitle.textContent = `⚡ 你的本命特工：${bestAgent.name}`;
            resultDesc.textContent = bestAgent.desc;
        } else {
            resultTitle.textContent = `⚡ 匹配失败`;
            resultDesc.textContent = `再试一次吧！`;
        }
        
        loadingSection.classList.add('hidden');
        resultSection.classList.remove('hidden');
        canAutoJump = true;
    }, 2000);
}

// ---------- 开始测试 ----------
function startQuiz() {
    startSection.classList.add('hidden');
    quizSection.classList.remove('hidden');
    resetQuiz(); // 重置状态并渲染第一题
}

startBtn.addEventListener('click', startQuiz);

// ---------- 重置 ----------
function resetQuiz() {
    clearTimeout(jumpTimer);
    shuffleArray(questions);
    currentIndex = 0; 
    userAnswers = new Array(totalQuestions).fill(null); 
    canAutoJump = true;
    quizSection.classList.remove('hidden'); 
    resultSection.classList.add('hidden'); 
    loadingSection.classList.add('hidden');
    renderQuestion();
}

// ---------- 启动 ----------
prevBtn.addEventListener('click', goToPrev);
nextBtn.addEventListener('click', goToNext);
submitBtn.addEventListener('click', showResult);
restartBtn.addEventListener('click', resetQuiz);
// 页面初始状态：显示开始界面，隐藏其他区域
startSection.classList.remove('hidden');
quizSection.classList.add('hidden');
resultSection.classList.add('hidden');
loadingSection.classList.add('hidden');