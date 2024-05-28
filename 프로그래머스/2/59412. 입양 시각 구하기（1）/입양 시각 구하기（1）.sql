-- 코드를 입력하세요
SELECT HOUR(DATETIME) 'HOUR' , count(DATETIME) 'COUNT' 
from ANIMAL_OUTS 
group by HOUR(DATETIME)
having HOUR between 9 and 19
order by HOUR