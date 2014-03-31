# Query
[]({'id':'guery','data-menu':'Query'})

Group 기능은 Group Collection을 통해 지원되며, 그룹을 만들어 회원을 관리 할 수 있습니다.

## Query Entities from Collection
[]({'id':'guery-entities-from-collection','data-menu':'Query Entities from Collection'})

Collection으로부터 데이터를 조회할때는 setType() 메소드를 이용하여 조회할 Entity의 Type을 설정합니다.

아래의 예는 "friends" Collection으로부터 "friend" Entity를 조회해 오는 예입니다.

setType() 메소드를 설정하여 Entity의 Type으로 "friend"를 지정해주고 있으며, setOrderBy()를 이용하여 수정시간을 기준으로 내림차순 정렬하도록 합니다. 또한 setLimit()를 설정하여 10개씩 받도록 합니다.



## Query User Entities from Group
[]({'id':'guery-user-entities-from-group','data-menu':'Query User Entities from Group'})

## Query Entities with Relationship
[]({'id':'guery-entities-with-relationship','data-menu':'Query Entities with Relationship'})