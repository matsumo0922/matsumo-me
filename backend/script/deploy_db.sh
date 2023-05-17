# kill -9 $(lsof -t -i:5455)
# fly proxy 5455:5432 -a matsumo-me-api-db

docker exec $(docker ps --filter name=matsumo-me-db --format "{{.ID}}") pg_dump -d matsumo-me -U matsumo > matsumo-me.dump
psql postgres://matsumo_me_api:gKBMmE2N7Sst5H5@localhost:5455/matsumo_me_api -f matsumo-me.dump

rm matsumo-me.dump

echo "Done."
