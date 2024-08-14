// 使用 Vue 3 創建應用
const { createApp, ref, computed } = Vue;

createApp({
    setup() {
        // 定義回合資料
        const rows = ref([
            { currentRound: '一', card: '', box: '' },
            { currentRound: '一', card: '', box: '' },
            { currentRound: '二', card: '', box: '' },
            { currentRound: '二', card: '', box: '' },
            { currentRound: '三', card: '', box: '' },
            { currentRound: '三', card: '', box: '' },
            { currentRound: '三', card: '', box: '' },
            { currentRound: '四', card: '', box: '' }
        ]);

        // 定義區域選項
        const locations = {
            '1': '巳',
            '2': '午',
            '3': '未',
            '4': '申',
            '5': '辰',
            '6': '酉',
            '7': '卯',
            '8': '戌',
            '9': '寅',
            '10': '丑',
            '11': '子',
            '12': '亥',
            'center': '中心區域'
        };

        // 定義每回合的圖片
        const roundImages = ref({
            '一': [],
            '二': [],
            '三': [],
            '四': [],
            'final': []
        });

        // 定義是否可以編輯輸入框和選擇框
        const canEdit = (index) => {
            if (allRoundsCompleted.value) return false;
            if (index === 0) return true;
            const prevRow = rows.value[index - 1];
            return prevRow.card !== '' && prevRow.box !== '';
        };

        // 定義是否顯示該行
        const canShow = (index) => {
            if (index === 0) return true;
            const prevRow = rows.value[index - 1];
            return prevRow.card !== '' && prevRow.box !== '';
        };

        // 根據當前回合顯示相應圖片
        const currentRoundImages = computed(() => {
            const currentRound = rows.value.find(row => row.card === '' || row.box === '')?.currentRound;
            return roundImages.value[currentRound] || roundImages.value['final'];
        });

        // 驗證輸入的數字
        const validateNumber = (index) => {
            const value = rows.value[index].card;
            const currentRound = rows.value[index].currentRound;
            const maxNumber = round_data.rounds.find(round => round.round === currentRound).texts.length;

            if (!/^\d*$/.test(value)) {
                rows.value[index].card = value.replace(/\D/g, '');
                return false;
            }

            if (value < 1 || value > maxNumber) {
                alert(`請輸入 1 到 ${maxNumber} 之間的數字！`);
                rows.value[index].card = '';
                return false;
            }

            return true;
        };

        // 檢查是否有重複的數字
        const checkDuplicate = (index) => {
            const currentRow = rows.value[index];
            const currentRound = currentRow.currentRound;
            const currentCard = currentRow.card;
            if (currentCard === '') return;
            const duplicate = rows.value.some((row, i) => i !== index && row.currentRound === currentRound && row.card === currentCard);
            if (duplicate) {
                alert("同一回合不能輸入相同的數字！");
                rows.value[index].card = '';
                return false;
            }
            return true;
        };

        const round_data = {
            ver: "1.0",
            rounds: [
                {
                    round: "一",
                    card_back_background_image: "images/back3.jpg",
                    card_face_background_image: "images/face10.jpg",
                    totalCards: 14,
                    drawCount: 2,
                    texts: [
                        { key: "AA", "front": "", "back": "" },
                        { key: "AB", "front": "", "back": "" },
                        { key: "AC", "front": "", "back": "" },
                        { key: "AD", "front": "", "back": "" },
                        { key: "AE", "front": "", "back": "" },
                        { key: "AF", "front": "", "back": "" },
                        { key: "AG", "front": "", "back": "" },
                        { key: "AH", "front": "", "back": "" },
                        { key: "AI", "front": "", "back": "" },
                        { key: "AJ", "front": "", "back": "" },
                        { key: "AK", "front": "", "back": "" },
                        { key: "AL", "front": "", "back": "" },
                        { key: "AM", "front": "", "back": "" },
                        { key: "AN", "front": "", "back": "" }
                    ]
                },
                {
                    round: "二",
                    card_back_background_image: "images/back2.jpg",
                    card_face_background_image: "images/face16.jpg",
                    totalCards: 14,
                    drawCount: 2,
                    texts: [
                        { key: "BA", "front": "", "back": "" },
                        { key: "BB", "front": "", "back": "" },
                        { key: "BC", "front": "", "back": "" },
                        { key: "BD", "front": "", "back": "" },
                        { key: "BE", "front": "", "back": "" },
                        { key: "BF", "front": "", "back": "" },
                        { key: "BG", "front": "", "back": "" },
                        { key: "BH", "front": "", "back": "" },
                        { key: "BI", "front": "", "back": "" },
                        { key: "BJ", "front": "", "back": "" },
                        { key: "BK", "front": "", "back": "" },
                        { key: "BL", "front": "", "back": "" },
                        { key: "BM", "front": "", "back": "" },
                        { key: "BN", "front": "", "back": "" }
                    ]
                },
                {
                    round: "三",
                    card_back_background_image: "images/back1.jpg",
                    card_face_background_image: "images/face17.jpg",
                    totalCards: 32,
                    drawCount: 3,
                    texts: [
                        { key: "CA", "front": "", "back": "" },
                        { key: "CB", "front": "", "back": "" },
                        { key: "CC", "front": "", "back": "" },
                        { key: "CD", "front": "", "back": "" },
                        { key: "CE", "front": "", "back": "" },
                        { key: "CF", "front": "", "back": "" },
                        { key: "CG", "front": "", "back": "" },
                        { key: "CH", "front": "", "back": "" },
                        { key: "CI", "front": "", "back": "" },
                        { key: "CJ", "front": "", "back": "" },
                        { key: "CK", "front": "", "back": "" },
                        { key: "CL", "front": "", "back": "" },
                        { key: "CM", "front": "", "back": "" },
                        { key: "CN", "front": "", "back": "" },
                        { key: "CO", "front": "", "back": "" },
                        { key: "CP", "front": "", "back": "" },
                        { key: "CQ", "front": "", "back": "" },
                        { key: "CR", "front": "", "back": "" },
                        { key: "CS", "front": "", "back": "" },
                        { key: "CT", "front": "", "back": "" },
                        { key: "CU", "front": "", "back": "" },
                        { key: "CV", "front": "", "back": "" },
                        { key: "CW", "front": "", "back": "" },
                        { key: "CX", "front": "", "back": "" },
                        { key: "CY", "front": "", "back": "" },
                        { key: "CZ", "front": "", "back": "" },
                        { key: "DA", "front": "", "back": "" },
                        { key: "DB", "front": "", "back": "" },
                        { key: "DC", "front": "", "back": "" },
                        { key: "DD", "front": "", "back": "" },
                        { key: "DE", "front": "", "back": "" },
                        { key: "DF", "front": "", "back": "" }
                    ]
                },
                {
                    round: "四",
                    card_back_background_image: "images/back4.jpg",
                    card_face_background_image: "images/face9.jpg",
                    totalCards: 12,
                    drawCount: 1,
                    texts: [
                        { key: "EA", "front": "", "back": "" },
                        { key: "EB", "front": "", "back": "" },
                        { key: "EC", "front": "", "back": "" },
                        { key: "ED", "front": "", "back": "" },
                        { key: "EE", "front": "", "back": "" },
                        { key: "EF", "front": "", "back": "" },
                        { key: "EG", "front": "", "back": "" },
                        { key: "EH", "front": "", "back": "" },
                        { key: "EI", "front": "", "back": "" },
                        { key: "EJ", "front": "", "back": "" },
                        { key: "EK", "front": "", "back": "" },
                        { key: "EL", "front": "", "back": "" }
                    ]
                }
            ]
        };

        const randomTexts = ref({});
        const getRandomTexts = (round) => {
            if (!randomTexts.value[round]) {
                const roundData = round_data.rounds.find(r => r.round === round);
                if (roundData) {
                    randomTexts.value[round] = shuffleArray(roundData.texts);
                } else {
                    console.error(`Round ${round} not found.`);
                    return [];
                }
            }
            return randomTexts.value[round];
        };

        // 隨機排列數組的函數
        const shuffleArray = (array) => {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        };

        round_data.rounds.forEach(round => {
            getRandomTexts(round.round);
        });

        const getCardKey = (round, card) => {
            const texts = getRandomTexts(round);
            return texts[card - 1].key;
        };

        const getMaxNumber = (round) => {
            const roundData = round_data.rounds.find(r => r.round === round);
            return roundData ? roundData.texts.length : 0;
        };

        const allRoundsCompleted = computed(() => {
            return rows.value.every(row => row.card !== '' && row.box !== '');
        });

        const results = computed(() => {
            if (!allRoundsCompleted.value) return [];
            return rows.value.map(row => {
                return {
                    round: row.currentRound,
                    key: getCardKey(row.currentRound, row.card),
                    box: row.box
                };
            });
        });

        const roundMap = {
            '一': 1,
            '二': 2,
            '三': 3,
            '四': 4
        };

        const formattedResults = computed(() => {
            const version = `${round_data.ver}`;
            const resultStr = results.value.map(result => `${result.box}-${result.key}`).join('-');
            return `${version};${resultStr}`;
        });

        const base64Output = computed(() => {
            const utf8String = new TextEncoder().encode(formattedResults.value);
            const base64String = btoa(String.fromCharCode.apply(null, utf8String));
            return base64String;
        });

        const decodedBase64 = computed(() => {
            const binaryString = atob(base64Output.value);
            const bytes = new Uint8Array(binaryString.length);
            for (let i = 0; i < binaryString.length; i++) {
                bytes[i] = binaryString.charCodeAt(i);
            }
            const decodedString = new TextDecoder().decode(bytes);
            return decodedString;
        });

        // 防抖函數，用於延遲處理輸入事件
        const debounce = (func, delay) => {
            let timeout;
            return function (...args) {
                clearTimeout(timeout);
                timeout = setTimeout(() => func.apply(this, args), delay);
            };
        };

        const handleInput = (index, row) => {
            if (validateNumber(index) && checkDuplicate(index)) {
                //row.cardText = getCardText(row.currentRound, row.card);
            }
        };

        const debouncedHandleInput = debounce(handleInput, 500);

        /* 禁用下一格 */
        const isNextFilled = (index) => {
            const nextRow = rows.value[index];
            return nextRow ? (nextRow.card !== '' && nextRow.box !== '') : false;
        };

        const getOptions = (currentRound) => {
            if (currentRound === '四') {
                return [{ value: 'center', text: locations['center'] }];
            }
            return Object.keys(locations)
                .filter(key => key !== 'center')
                .map(key => ({ value: key, text: locations[key] }));
        };

        // 複製 Base64 字串到剪貼板
        const copyToClipboard = (text) => {
            navigator.clipboard.writeText(text).then(() => {
                alert("Base64 字串已複製到剪貼板！");
            }).catch(err => {
                console.error('複製失敗: ', err);
            });
        };

        return {
            rows,
            roundImages,
            canEdit,
            currentRoundImages,
            validateNumber,
            randomTexts,
            getCardKey,
            checkDuplicate,
            debouncedHandleInput,
            allRoundsCompleted,
            results,
            formattedResults,
            base64Output,
            decodedBase64,
            getMaxNumber,
            canShow,
            isNextFilled,
            getOptions,
            copyToClipboard
        };
    }
}).mount('#app');