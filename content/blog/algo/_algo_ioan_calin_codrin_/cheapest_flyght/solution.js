CREATE PROCEDURE cheapestFlights()
    /* Write your SQL here. Terminate each statement with a semicolon. */
WITH RECURSIVE
cte as ( SELECT  origin,
                destination,
                0 stops,
                cost AS total_cost,
                CAST(id AS CHAR) path
        FROM flights
        UNION ALL
        SELECT  cte.origin,
                flights.destination,
                cte.stops + 1,
                cte.total_cost + flights.cost,
                CONCAT(cte.path, ',', flights.id)
        FROM cte
        JOIN flights ON cte.destination = flights.origin
                        AND !FIND_IN_SET(flights.destination, cte.path)
                        AND cte.stops < 2
    ),
cte2 AS (
    SELECT *, RANK() OVER (
        PARTITION BY origin, destination
        ORDER BY total_cost, stops ASC) ranking
    FROM cte
    )
SELECT origin, destination, stops, total_cost
FROM cte2
WHERE ranking = 1
ORDER BY origin, destination, total_cost