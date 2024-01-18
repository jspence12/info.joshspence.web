$bucket = "info.joshspence.web";

echo "Building application"
npm run build

echo "Creating Bucket"
aws s3api create-bucket --bucket $bucket--region us-east-1 --object-ownership BucketOwnerPreferred

echo "Setting Up Bucket Access"
aws s3 website $bucket --index-document index.html
aws s3api delete-public-access-block --bucket $bucket
aws s3api put-bucket-policy --bucket $bucket --policy file://policy.json

echo "Copying files"
aws s3 sync ../out s3://info.joshspence.web

echo "Deployment Successful"
